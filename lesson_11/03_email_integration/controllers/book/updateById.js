const requestError = require('../../helpers/requestError');
const Book = require('../../models/book')

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, {new: true})
  if (!result) {
    throw requestError(404)
  }
  res.status(200).json(result);
};

module.exports = updateById;
