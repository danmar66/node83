const books = require("../../data/books");

const add = async (req, res, next) => {
  const { title, author } = req.body;
  const result = await books.add(title, author);
  res.status(201).json(result);
};

module.exports = add;
