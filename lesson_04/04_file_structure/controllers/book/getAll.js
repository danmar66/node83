const books = require("../../data/books");

const getAll = async (req, res, next) => {
  const result = await books.getAll();
  return res.status(200).json(result);
};

module.exports = getAll;
