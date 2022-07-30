const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { randomBytes } = require("crypto");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

const posts = [];

app.get("/post/:id/comment", (req, res) => {
  return res.status(200).json(posts);
});

app.post("/post/:id/comment", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  posts.push({
    id,
    title,
  });
  return res.status(200).json(posts);
});

const port = 5000;
app.listen(port, () => {
  console.log(`MS Comments server started at http://localhost:${port}`);
});