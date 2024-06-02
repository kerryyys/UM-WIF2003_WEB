import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// This function will provide the component with user context
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (newUserData) => {
    // update user here
    setUser(newUserData);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
