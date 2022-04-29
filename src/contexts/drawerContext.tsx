import { createContext, useState } from "react";

interface DrawerProviderProps {
  open: boolean;
  view: "admin" | "host" | "customer" | null;
  handleView: (view: DrawerProviderProps["view"]) => void;
  handleOpen: (open: DrawerProviderProps["open"]) => void;
}

export const DrawerContext = createContext<DrawerProviderProps>({
  handleView: () => {},
  handleOpen: () => {},
  view: null,
  open: false,
});

const DrawerProvider = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState<DrawerProviderProps["open"]>(false);
  const [view, setView] = useState<DrawerProviderProps["view"]>("admin");

  const handleOpen = (open: DrawerProviderProps["open"]) => setIsOpen(open);

  const handleView = (view: DrawerProviderProps["view"]) => setView(view);

  return (
    <DrawerContext.Provider
      value={{ view, open: isOpen, handleOpen, handleView }}
      {...rest}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
