const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8000,
  MONGODB_URL: process.env.MONGODB_URL,
};