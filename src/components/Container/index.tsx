import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

const Container = (props: ContainerProps) => {
  const {
    children,
    maxWidth = "container.xl",
    bgColor = "white",
    ...rest
  } = props;

  return (
    <ChakraContainer
      maxWidth={maxWidth}
      bgColor={bgColor}
      height="auto"
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;
