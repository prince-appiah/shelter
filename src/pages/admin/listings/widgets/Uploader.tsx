import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { MutableRefObject, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

type Props = {
  // setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  handleImageUpload: (event) => void;
  inputRef: MutableRefObject<any>;
  uploadedFiles: any[];
};

const Uploader = ({ inputRef, handleImageUpload, uploadedFiles }: Props) => {
  // const [uploadedFiles, setUploadedFiles] = useState([]);
  console.log("🚀 ~ uploadedFiles", uploadedFiles);
  // const inputRef = useRef(null);

  // const handleImageUpload = (ev) => {
  //   console.log("🚀 ~ ev", new Array(...ev.target.files));
  //   setUploadedFiles(new Array(...ev.target.files));
  //   setFieldValue("images", new Array(...ev.target.files));
  // };

  return (
    <VStack width="full" align="start" mb={2}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="full"
        bg="blue.50"
        borderWidth={0.5}
        borderStyle="dashed"
        cursor="pointer"
        borderColor="blue.500"
        borderRadius={4}
        p={3}
        onClick={() => inputRef.current.click()}
      >
        {/* Upload space */}
        <VStack
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
        >
          <Flex
            p={1}
            w={50}
            align="center"
            justify="center"
            h={50}
            borderRadius="full"
            bg="blue.100"
          >
            <Icon as={AiOutlineCloudUpload} color="blue.400" fontSize="xl" />
          </Flex>
          <Text fontWeight={600}>Upload files</Text>
          <input
            type="file"
            multiple
            name="images"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            ref={inputRef}
          />
          <Text fontSize={12} color="gray">
            Supports .png, .jpg
          </Text>
        </VStack>
      </Flex>
      {/* Preview images below - in very small thumbnails */}
      {uploadedFiles && (
        <HStack overflowX="scroll">
          {uploadedFiles.map((item, idx) => (
            <FileItem key={idx} item={item} />
          ))}
        </HStack>
      )}
    </VStack>
  );
};

const FileItem = ({ item }) => {
  return (
    <Image
      src={URL.createObjectURL(item)}
      objectFit="cover"
      alt="FileItem"
      borderRadius="lg"
      width={100}
      height={100}
    />
  );
};

export default Uploader;
