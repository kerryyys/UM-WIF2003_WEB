import React, { createContext, useContext } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ postId, post, children }) => {
  return (
    <PostContext.Provider value={{ postId, post }}>
      {children}
    </PostContext.Provider>
  );
};
