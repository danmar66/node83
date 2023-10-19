const requestError = require('../../helpers/requestError');
const Book = require('../../models/book')

const updateFavorite = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.body)
  const result = await Book.findByIdAndUpdate(id, req.body, {new: true})
  if (!result) {
    throw requestError(404)
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;