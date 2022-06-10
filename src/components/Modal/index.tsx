import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

type ICustomModalProps = {
  onOpen?: () => void;
  isOpen: boolean;
  onClose: () => void;
} & ModalProps;

const Modal = (props: ICustomModalProps) => {
  const { isOpen, onClose, onOpen, children, ...rest } = props;

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalOverlay />
        <ModalContent>{children}</ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
