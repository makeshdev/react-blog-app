import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">{post?.title}</div>
        <div className="card-body">
          <p className="card-text">{post?.body}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
