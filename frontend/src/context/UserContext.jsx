import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// This function will provide the component with user context
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ user, children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
