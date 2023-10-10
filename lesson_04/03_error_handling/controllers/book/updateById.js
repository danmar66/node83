const books = require("../../data/books");
// const requestError = require("../../helpers/requestError");
// const booksSchema = require("../../schemas/book");

const updateById = async (req, res, next) => {
  const { id } = req.params;
  // const { error } = booksSchema.validate(req.body);

  // if (error) {
  //   throw requestError(400, error.message);
  // }

  const { title, author } = req.body;
  const result = await books.updateById(id, title, author);
  res.status(200).json(result);
};

// const updateById = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const { error } = booksSchema.validate(req.body);

//     // const validationResult = booksSchema.validate(req.body)
//     // console.log('validation = ', validationResult)

//     if (error) {
//       throw requestError(400, error.message);
//     }

//     const { title, author } = req.body;
//     const result = await books.updateById(id, title, author);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = updateById;
