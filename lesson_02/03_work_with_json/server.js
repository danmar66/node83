const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const all = await books.getAll();
      console.log(all);
      break;
    case "getById":
      const oneBook = await books.getById(id);
      console.log(oneBook);
      break;
    case "add":
      const newBook = await books.add(title, author);
      console.log(newBook);
      break;
    case "updateById":
      const updatedBook = await books.updateById(id, title, author);
      console.log(updatedBook);
      break;
    case "removeById":
      const removedBook = await books.removeById(id);
      console.log(removedBook);
      break;

    default:
      console.log("Unknown action");
      break;
  }
};

// invokeAction({action: "getAll"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"})
// invokeAction({action: "add", title: "1984", author: "George Orwell"})
invokeAction({
  action: "updateById",
  id: "xKv9pMVtjaUvNsCpHIv4G",
  title: "1984",
});
// invokeAction({action: "removeById", id: "kL0hhKCu2ve1V-H91hPH0"})
