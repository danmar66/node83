const books = require("../../data/books");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const result = await books.updateById(id, title, author);
  res.status(200).json(result);
};

module.exports = updateById;
