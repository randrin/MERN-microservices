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

app.get("/posts", (req, res) => {
  return res.status(200).json(posts);
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  posts.push({
    id,
    title,
  });
  return res.status(200).json(posts);
});

const port = 4000;
app.listen(port, () => {
  console.log(`MS Posts server started at http://localhost:${port}`);
});
