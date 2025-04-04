import { createContext, useState, useEffect } from "react";
import { fetchTopUsers, fetchTrendingPosts } from "../api/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [topUsers, setTopUsers] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setTopUsers(await fetchTopUsers());
      setTrendingPosts(await fetchTrendingPosts());
    };
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ topUsers, trendingPosts }}>
      {children}
    </DataContext.Provider>
  );
};
