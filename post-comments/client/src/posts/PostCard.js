import React from "react";

const PostCard = ({ posts }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {posts.map((post, index) => (
            <div key={index} class="card mb-3">
              <div class="card-body">{post.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
