const express =  require("express");
const { getListPosts, createPost } = require("../controllers/postController.js");

const postRouter = express.Router();

postRouter.get("/posts", getListPosts);
postRouter.post("/create/post", createPost);

module.exports = postRouter;
