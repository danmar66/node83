const requestError = require('../../helpers/requestError');
const fs = require('fs/promises')
const path = require('path')
const Book = require('../../models/book')

const uploadImage = async (req, res) => {
    const { filename } = req.file;
    const tmpPath = path.resolve(__dirname, "../../tmp", filename);
    const publicPath = path.resolve(__dirname, "../../public", filename);
    try {
        fs.rename(tmpPath, publicPath);
    } catch (error) {
        fs.unlink(tmpPath)
        throw requestError(500)
    }

    const id = req.params.id

    const book = await Book.findByIdAndUpdate(id, {
        image: `/public/${filename}`
    }, {new: true})

    return res.status(200).json({image: book.image})
}

module.exports = uploadImage