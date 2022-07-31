const Comment = require("../models/commentModel");

exports.getListCommentsByPost = async (req, res) => {
  const listComments = await Comment.findById(req.params.id);
  res.status(200).send({ listComments });
};

exports.createCommentToPost = async (req, res) => {
  const { title } = req.body;
  const postId = req.params.postId;

  const commentCreated = new Comment({
    title,
    post: postId,
  }).save();
  if (commentCreated) {
    return res.status(200).json({ message: "Comment created succesfully." });
  } else {
    return res.status(500).json({ message: "Something wront bad. Try again." });
  }
};
