import React from "react";
import { useState } from "react";

interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: Partial<SidebarContextType> = {
  isSidebarOpen: true,
};

export const SidebarContext = React.createContext<SidebarContextType>(
  defaultValues as SidebarContextType
);

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, toggleSidebar] = useState(
    defaultValues.isSidebarOpen as boolean
  );
  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
