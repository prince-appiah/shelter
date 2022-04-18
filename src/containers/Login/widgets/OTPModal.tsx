import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

type IModalProps = {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
} & ModalProps;

const OtpModal = (props: IModalProps) => {
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

export default OtpModal;
