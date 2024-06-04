import { createContext, useContext, useState, useEffect } from "react";
import { verifyUserToken } from "../api/authApi";

const UserContext = createContext();

// This function will provide the component with user context
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserToken = async () => {
      const result = await verifyUserToken();
      console.log("In User Context, the result status is=", result.status);
      if (result.status) {
        setUser(result.user);
      }
    };

    checkUserToken();
  }, []);

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
