const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { randomBytes } = require("crypto");
const config = require("./config");


const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.log("Error connected to mongodb:", error.reason);
  });

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

const port = config.PORT;
app.listen(port, () => {
  console.log(`MS Posts server started at http://localhost:${port}`);
});
