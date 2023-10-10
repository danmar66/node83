const joi = require('joi')

const booksSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required()
})

module.exports = booksSchema