const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: [true, "Field author is required!"],
    },
    favourite: {
      type: Boolean,
    },
    genre: {
      type: String,
      enum: {
        values: ["tech", "utopia", "romance"],
        message: "{VALUE} is not supported",
      },
      required: true,
    },
    image: {
      type: String,
      default: '',
    }
    //  isbn: {
    //   type: String,
    //   match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
    //   unique: true,
    //   required: true,
    // },
    // qty: {
    //   type: Number,
    //   min: [5, "You should buy at least 5 items"],
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

bookSchema.post("save", (error, data, next) => {
  error.status = 400
  next()
})

const Book = model("book", bookSchema);

module.exports = Book;
