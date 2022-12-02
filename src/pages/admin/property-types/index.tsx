import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, TableHeadProps, Tbody, Td, Tr, useToast } from "@chakra-ui/react";
import Button from "components/Button";
import AmenityModal from "components/Modal";
import { ModalContext } from "contexts/ModalContext";
import { useAppDispatch, useGlobalState } from "hooks/reduxHooks";
import useTable from "hooks/useTable";
import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { fetchPropertyTypesAction, removePropertyTypeAction } from "redux/global/asyncActions";
import { setStatus } from "redux/global/globalSlice";
import { store } from "redux/store";
import { IPropertyType } from "typings";
import CreatePropertyTypeModal from "./widgets/CreatePropertyType";
import EditPropertyTypeModal from "./widgets/EditPropertyType";

type Props = {};

const headCells: TableHeadProps[] = [
  { id: "s/n", title: "S/N" },
  { id: "name", title: "Property Type" },
  { id: "icon", title: "Icon" },
];

const PropertyTypes = (props: Props) => {
  const { open, handleOpen, handleView, view } = useContext(ModalContext);
  const [selectedType, setSelectedType] = useState(null);
  const { propertyTypes } = useGlobalState();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { TContainer, TableHead, results } = useTable(propertyTypes, headCells);

  useEffect(() => {
    const fetchPropertyTypes = () => dispatch(fetchPropertyTypesAction());
    fetchPropertyTypes();

    return () => {
      store.dispatch(setStatus("idle"));
    };
  }, [dispatch]);

  return (
    <Flex direction="column" my={6} px={{ base: 2, md: 4 }}>
      <Box p={4} borderWidth="thin" bg="white" borderColor="gray.100" rounded="md">
        <Flex align="center" justify="space-between" mb={8}>
          <Heading fontSize={20}>Property Types ({propertyTypes.length})</Heading>

          <Button
            onClick={() => {
              handleOpen(!open);
              handleView("add-property-type");
            }}
            leftIcon={<AddIcon />}
          >
            Create Property Type
          </Button>
        </Flex>

        <TContainer>
          <TableHead />
          <Tbody>
            {results?.length > 0 &&
              results?.map((item: IPropertyType, idx: number) => (
                <Tr
                  key={item._id}
                  cursor="pointer"
                  textColor="gray.500"
                  sx={{ _hover: { bgColor: "gray.50" } }}
                  onClick={() => {
                    handleOpen(!open);
                    handleView("edit-property-type");
                    setSelectedType(item);
                  }}
                >
                  <Td>{idx + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.icon}</Td>
                  <Td>
                    <IconButton
                      variant="outline"
                      aria-label="Delete Property Type"
                      color="red"
                      icon={<AiOutlineDelete />}
                      onClick={() => {
                        dispatch(removePropertyTypeAction(item._id));
                        toast({
                          status: "success",
                          position: "top-right",
                          variant: "left-accent",
                          description: "Property type has been deleted",
                        });
                      }}
                      zIndex={999}
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </TContainer>
      </Box>

      {/* Create amenity modal */}
      <AmenityModal isOpen={open} onClose={() => handleOpen(!open)}>
        {/* dynamically render content based on view from the global state */}
        {view === "add-property-type" && <CreatePropertyTypeModal />}
        {view === "edit-property-type" && <EditPropertyTypeModal propertyType={selectedType} />}
      </AmenityModal>
    </Flex>
  );
};

export default PropertyTypes;
