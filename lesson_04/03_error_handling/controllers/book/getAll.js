const books = require('../../data/books')

const getAll = async (req, res, next) => {
    const result = await books.getAll();
    return res.status(200).json(result);
};

// const getAll = async (req, res, next) => {
//   try {
//     const result = await books.getAll();
//     return res.status(200).json(result);
//   } catch (error) {
//     // res.status(500).json({ message: "Server error" });

//     next(error);
//   }

//   // const result = await books.getAll()
//   // return res.status(200).json(result)
// };

module.exports = getAll