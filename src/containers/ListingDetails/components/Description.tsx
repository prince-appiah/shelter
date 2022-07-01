import { Flex, Text } from "@chakra-ui/react";
import { IProperty } from "typings";

type DescriptionProps = {
  listing: IProperty;
};

const Description = ({ listing }: DescriptionProps) => {
  return (
    <Flex
      direction="column"
      borderRadius={10}
      borderWidth="thin"
      borderColor="rgba(69, 77, 102, 0.2)"
      width="full"
      py={8}
      px={6}
      mb={6}
    >
      <Text fontSize={24} fontWeight={600} mb={4}>
        Description
      </Text>
      <Text color="gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi
        ex blanditiis est tempore odit molestias alias id, quam suscipit
        similique, dolorem at corporis, vero eum architecto cupiditate doloribus
        ipsum? Temporibus nesciunt exercitationem a deserunt illo voluptate
        inventore et nostrum rem odio non tempora, architecto iusto quis
        perferendis fugiat consectetur? Fugiat accusantium rerum, odio expedita
        accusamus ut natus aliquid ab. Corporis optio cum in facere, corrupti
        aperiam quaerat esse natus mollitia obcaecati voluptas voluptatibus
        labore iusto beatae quisquam at. Quod nostrum pariatur maiores
        voluptatem dolore laborum nisi esse consectetur debitis!
      </Text>
    </Flex>
  );
};

export default Description;
