const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// const bookPath = path.join(__dirname, 'books.json')
// const bookPath = path.resolve('books/books.json')

const bookPath = path.resolve(__dirname, "books2.json");

const updateBooks = async (books) => {
    await fs.writeFile(bookPath, JSON.stringify(books, null, 2))
}

const getAll = async () => {
  const data = await fs.readFile(bookPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result || null;
};

const add = async (title, author) => {
    const books = await getAll()
    const newBook = {
        id: nanoid(),
        title,
        author
    }
    books.push(newBook)
    await updateBooks(books)
    return newBook
};

const updateById = async (id, title, author) => {
    const books = await getAll()
    const index = books.findIndex((item) => item.id === id)
    if (index === -1) {
        return null
    }
    books[index] = {
        id, 
        title: title ? title : books[index].title, 
        author: author ? author : books[index].author
    }
    await updateBooks(books)
    return books[index]
};

const removeById = async (id) => {
    const books = await getAll()
    const index = books.findIndex((item) => item.id === id)
    if (index === -1) {
        return null
    }
    // const newBooks = books.filter(item.id !== id)
    const [result] = books.splice(index, 1)
    await updateBooks(books)
    return result
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById,
};
