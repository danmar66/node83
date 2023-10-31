const Book = require('../../models/book')

const removeById = async (req, res, next) => {
  const { id } = req.params;
  // const result = await Book.findByIdAndDelete(id)
  const result = await Book.findByIdAndRemove(id)
  res.status(200).json(result);
};

module.exports = removeById;
