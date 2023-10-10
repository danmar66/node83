const books = require("../../data/books");
const requestError = require("../../helpers/requestError");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await books.getById(id);
  if (!result) {
    throw requestError(404);
  }
  res.status(200).json(result);
};

// const getById = async (req, res, next) => {
//   try {
//     // console.log(req.params);

//     const { id } = req.params;
//     const result = await books.getById(id);
//     if (!result) {
//       // return res.status(404).json({
//       //     message: "Not Found"
//       // })

//       //   const error = new Error("Not Found");
//       //   error.status = 404;
//       //   throw error;

//       throw requestError(404);
//     }
//     res.status(200).json(result);
//   } catch (error) {
//     // res.status(500).json({message: "Server error"})

//     // const { status = 500, message = "Server error" } = error;
//     // res.status(status).json({ message });

//     next(error);
//   }
// };

module.exports = getById;
