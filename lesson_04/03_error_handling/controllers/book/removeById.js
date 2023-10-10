const books = require('../../data/books')

const removeById = async(req, res, next) => {
        const { id } = req.params;
        const result = await books.removeById(id)
        res.status(200).json(result)
}

// const removeById = async(req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await books.removeById(id)
//         res.status(200).json(result)
//     } catch (error) {
//         next(error)
//     }
// }

module.exports = removeById