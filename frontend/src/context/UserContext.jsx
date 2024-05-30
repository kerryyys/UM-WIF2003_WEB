import { createContext, useContext , useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ user, children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

// const InvoiceContext = createContext();

// export const InvoiceProvider = ({ children }) => {
//   const [projectTitle, setProjectTitle] = useState('');
//   const [projectBudget, setProjectBudget] = useState(0);

//   return (
//     <InvoiceContext.Provider value={{ projectTitle, projectBudget }}>
//       {children}
//     </InvoiceContext.Provider>
//   );
// };

// export const useInvoice = () => useContext(InvoiceContext);

