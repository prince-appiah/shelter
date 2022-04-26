import { createContext, useState } from "react";

interface DropdownProviderProps {
  open: boolean;
  dropdownView: "profile" | "signup";
  handleDropdownView: (
    dropdownView: DropdownProviderProps["dropdownView"]
  ) => void;
  handleDropdownOpen: (open: DropdownProviderProps["open"]) => void;
}

export const DropdownContext = createContext<DropdownProviderProps>({
  handleDropdownView: () => {},
  handleDropdownOpen: () => {},
  dropdownView: "profile",
  open: false,
});

const DropdownProvider = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState<DropdownProviderProps["open"]>(false);
  const [view, setView] =
    useState<DropdownProviderProps["dropdownView"]>("profile");

  const handleDropdownOpen = (open: DropdownProviderProps["open"]) =>
    setIsOpen(open);

  const handleDropdownView = (view: DropdownProviderProps["dropdownView"]) =>
    setView(view);

  return (
    <DropdownContext.Provider
      value={{
        open: isOpen,
        handleDropdownOpen,
        handleDropdownView,
        dropdownView: view,
      }}
      {...rest}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
