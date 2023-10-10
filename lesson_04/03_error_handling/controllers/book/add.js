const books = require("../../data/books");
// const requestError = require("../../helpers/requestError");
// const booksSchema = require("../../schemas/book");

const add = async (req, res, next) => {
  // const { error } = booksSchema.validate(req.body);
  // if (error) {
  //   throw requestError(400, error.message);
  // }

  const { title, author } = req.body;
  const result = await books.add(title, author);
  res.status(201).json(result);
};

// const add = async (req, res, next) => {
//   try {
//     // console.log(req.body)

//     const { error } = booksSchema.validate(req.body);

//     // const validationResult = booksSchema.validate(req.body)
//     // console.log('validation = ', validationResult)

//     if (error) {
//       throw requestError(400, error.message);
//     }

//     const { title, author } = req.body;
//     const result = await books.add(title, author);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = add;
