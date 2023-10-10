const mongoose = require("mongoose");
// const dotenv = require('dotenv')
// dotenv.config()
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB Connected"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
