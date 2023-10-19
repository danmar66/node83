const wrapper = require("../../helpers/controllerWrapper");

const addBook = require("./addBook");
const getBooks = require("./getBooks");
const getInfo = require("./getInfo");

module.exports = {
    addBook: wrapper(addBook),
    getBooks: wrapper(getBooks),
    getInfo: wrapper(getInfo),
};
