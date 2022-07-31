const Post = require("../models/postModel");

exports.getListPosts = async (req, res) => {
  const listPosts = await Post.find({});
  res.status(200).send({ listPosts });
};

exports.createPost = async (req, res) => {
  const { title } = req.body;
  const postCreated = new Post({
    title,
  }).save();
  if (postCreated) {
    return res.status(200).json({ message: "Post created succesfully." });
  } else {
    return res.status(500).json({ message: "Something wrong bad. Try again." });
  }
};
