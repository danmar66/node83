const express = require("express");
const booksRouter = require("./routes/api/books");

const app = express();

app.use(express.json())

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ mesaage: "Not found" });
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Server error" } = err;

  if (message.includes('ENOENT')) {
    message = "Server Error"
  }

  if (err.code === 11000) {
    message = "Server Error. Duplicate data"
  }

  res.status(status).json({ message });
});

module.exports = app
