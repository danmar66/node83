const Book = require('../../models/book')
const requestError = require("../../helpers/requestError");

const getById = async (req, res, next) => {
  const { id } = req.params;
  // const result = await Book.find({_id: id}) // -- find завжди повертає массив 
  // const result = await Book.findOne({_id: id})
  const result = await Book.findById(id)
  if (!result) {
    throw requestError(404);
  }
  res.status(200).json(result);
};

module.exports = getById;
