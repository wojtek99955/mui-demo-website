import { createContext, useState } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  return (
    <Context.Provider value={{ userData, setUserData }} r>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
