import React, { createContext, useState, useEffect, useContext } from "react";
import { getAllPosts } from "../api/postApi";

const NewsFeedContext = createContext();

export const useNewsFeedContext = () => useContext(NewsFeedContext);

export const NewsFeedProvider = ({ children }) => {
  const [newsFeedList, setNewsFeedList] = useState([]);

  const fetchPosts = async () => {
    const data = await getAllPosts();
    setNewsFeedList(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <NewsFeedContext.Provider value={{ newsFeedList, fetchPosts }}>
      {children}
    </NewsFeedContext.Provider>
  );
};
