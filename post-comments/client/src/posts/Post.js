import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const Post = () => {
  const [title, setTile] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getListPosts();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/create/post", { title })
      .then((res) => {
        setTile("");
        getListPosts();
      })
      .catch((error) => {
        console.log("Error Create POST => ", error.message);
      });
  };

  const getListPosts = async () => {
    await axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        setPosts(res.data.listPosts);
      })
      .catch((error) => {
        console.log("Error get POSTS => ", error.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="title">Post title</label>
            <input
              placeholder="Insert the post"
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTile(e.target.value)}
            />
            <button className="btn btn-primary mt-3" disabled={!title}>
              Create post
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <PostCard posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Post;
