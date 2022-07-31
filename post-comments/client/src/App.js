import React from "react";
import Post from "./posts/Post";

const App = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col text-center">
          <h2>MS Posts - Comments</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default App;
