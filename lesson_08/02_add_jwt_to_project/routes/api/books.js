const express = require("express");
const booksController = require('../../controllers/book')
const wrapper = require('../../helpers/controllerWrapper')
const validate = require('../../middlewares/validationMiddleware')
const schema = require('../../schemas/book')

const router = express.Router();

router.get("/", wrapper(booksController.getAll));

router.get("/:id", wrapper(booksController.getById));

// router.post("/", validate(schema.booksSchema), wrapper(booksController.add));
router.post("/", wrapper(booksController.add));

// router.put("/:id", validate(schema.booksSchema), wrapper(booksController.updateById));
router.put("/:id", wrapper(booksController.updateById));

router.patch("/:id/favourite", validate(schema.updateFavoriteSchema), wrapper(booksController.updateFavorite));

router.delete("/:id", wrapper(booksController.removeById));

module.exports = router;
