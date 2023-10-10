const express = require("express");
const booksController = require('../../controllers/book')
const wrapper = require('../../helpers/controllerWrapper')
const validate = require('../../middlewares/validationMiddleware')
const bookSchema = require('../../schemas/book')

const router = express.Router();

router.get("/", wrapper(booksController.getAll));

router.get("/:id", wrapper(booksController.getById));

router.post("/", validate(bookSchema), wrapper(booksController.add));

router.put("/:id", validate(bookSchema), wrapper(booksController.updateById));

router.delete("/:id", wrapper(booksController.removeById));

module.exports = router;
