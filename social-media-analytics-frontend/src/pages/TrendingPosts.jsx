import React, { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api/api";
import PostCard from "../components/PostCard";
import "../styles.css";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchTrendingPosts();
      setPosts(data);
    };

    loadPosts();
  }, []);

  return (
    <div className="page-container">
      <h2>🚀 Trending Posts</h2>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>Loading trending posts...</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPosts;
