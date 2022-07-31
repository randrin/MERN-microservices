const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
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

// Routes Middleware
fs.readdirSync("./routers").map((r) =>
  app.use(require(`./routers/${r}`))
);

const port = config.PORT;
app.listen(port, () => {
  console.log(`MS Posts server started at http://localhost:${port}`);
});
