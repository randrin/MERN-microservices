const express =  require("express");
const { getListCommentsByPost, createCommentToPost } = require("../controllers/commentController.js");

const commentRouter = express.Router();

commentRouter.get("/post/:postId/comments", getListCommentsByPost);
commentRouter.post("/post/:postId/comment", createCommentToPost);

module.exports = commentRouter;