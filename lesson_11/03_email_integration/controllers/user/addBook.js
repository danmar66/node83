const User = require('../../models/user');

const addBook = async(req, res, next) => {
    const {user} = req
    const { id: bookId} = req.body
    
    user.books.push(bookId)

    await User.findByIdAndUpdate(user.id, user)
    
    res.status(200).json({books: user.books})
}

module.exports = addBook