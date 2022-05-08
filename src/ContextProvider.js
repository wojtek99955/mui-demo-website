import { createContext, useState } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  return (
    <Context.Provide value={{ userData, setUserData }} r>
      {children}
    </Context.Provide>
  );
}

export default ContextProvider;
