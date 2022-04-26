import { createContext, useState } from "react";

interface ModalProviderProps {
  open: boolean;
  view: "login" | "signup";
  handleView: (view: ModalProviderProps["view"]) => void;
  handleOpen: (open: ModalProviderProps["open"]) => void;
}

export const ModalContext = createContext<ModalProviderProps>({
  handleView: () => {},
  handleOpen: () => {},
  view: "login",
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
