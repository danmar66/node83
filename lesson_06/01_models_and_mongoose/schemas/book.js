const joi = require("joi");

const booksSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  favorite: joi.boolean(),
  genre: joi.string().valueOf("tech", "utopia", "romance").required(),
  isbn: joi.string().pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/),
  qty: joi.number().min(5),
});

const updateFavoriteSchema = joi.object({
  favourite: joi.boolean().required(),
});

module.exports = { booksSchema, updateFavoriteSchema };
