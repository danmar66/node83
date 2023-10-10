const books = require("../../data/books");
const express = require("express");
const requestError = require("../../helpers/requestError");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    return res.status(200).json(result);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });

    next(error)
  }

  // const result = await books.getAll()
  // return res.status(200).json(result)
});

router.get("/:id", async (req, res, next) => {
  try {
    // console.log(req.params);

    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
      // return res.status(404).json({
      //     message: "Not Found"
      // })

      //   const error = new Error("Not Found");
      //   error.status = 404;
      //   throw error;

      throw requestError(404);
    }
    res.status(200).json(result);
  } catch (error) {
    // res.status(500).json({message: "Server error"})

    // const { status = 500, message = "Server error" } = error;
    // res.status(status).json({ message });

    next(error)
  }
});

router.post("/", async (req, res, next) => {
    try {
        // console.log(req.body)

        const {title, author} = req.body
        const result = await books.add(title, author)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const {title, author} = req.body
        const result = await books.updateById(id, title, author)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await books.removeById(id)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
});

module.exports = router;
