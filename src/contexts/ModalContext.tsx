import { createContext, useState } from "react";

interface ModalProviderProps {
  open: boolean;
  view:
    | "login"
    | "signup"
    | "create-user"
    | "edit-user"
    | "create-listing"
    | "edit-listing"
    | "create-amenity"
    | "edit-amenity"
    | "add-property-type"
    | "edit-property-type"
    | null;
  handleView: (view: ModalProviderProps["view"]) => void;
  handleOpen: (open: ModalProviderProps["open"]) => void;
}

export const ModalContext = createContext<ModalProviderProps>({
  handleView: () => {},
  handleOpen: () => {},
  view: null,
  open: false,
});

const ModalProvider = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState<ModalProviderProps["open"]>(false);
  const [view, setView] = useState<ModalProviderProps["view"]>("login");

  const handleOpen = (open: ModalProviderProps["open"]) => setIsOpen(open);

  const handleView = (view: ModalProviderProps["view"]) => setView(view);

  return (
    <ModalContext.Provider
      value={{ view, open: isOpen, handleOpen, handleView }}
      {...rest}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
