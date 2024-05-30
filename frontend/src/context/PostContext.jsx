import React, { createContext, useContext } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ postId, children }) => {
  return (
    <PostContext.Provider value={{ postId }}>{children}</PostContext.Provider>
  );
};
