import React from "react";
import "./PostCard.css"; // Ensure you create this CSS file

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-footer">
        <span>👍 {post.likes} Likes</span>
        <span>💬 {post.comments} Comments</span>
      </div>
    </div>
  );
};

export default PostCard;
