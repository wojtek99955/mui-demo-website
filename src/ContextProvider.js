import { createContext, useState } from "react";

export const Context = createContext({});

function ContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        posts,
        setPosts,
        likedPosts,
        setLikedPosts,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
