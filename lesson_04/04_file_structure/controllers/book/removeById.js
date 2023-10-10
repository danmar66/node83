const books = require("../../data/books");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await books.removeById(id);
  res.status(200).json(result);
};

module.exports = removeById;
