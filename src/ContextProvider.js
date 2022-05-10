import { createContext, useState } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        posts,
        setPosts,
        savedPosts,
        setSavedPosts,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
