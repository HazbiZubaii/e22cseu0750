import React from "react";
import TopUsers from "./TopUsers";
import TrendingPosts from "./TrendingPosts";
import "../styles.css";

const Feed = () => {
  return (
    <div className="page-container">
      <h2>📢 Social Media Feed</h2>
      <div className="feed-container">
        <div className="feed-section">
          <TopUsers />
        </div>
        <div className="feed-section">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default Feed;
