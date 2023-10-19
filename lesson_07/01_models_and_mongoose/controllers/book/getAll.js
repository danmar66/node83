const Book = require('../../models/book')

const getAll = async (req, res, next) => {
  // const result = await Book.find({}, 'title author')
  const result = await Book.find({}, 'title author')
  return res.status(200).json(result);
};

module.exports = getAll;
