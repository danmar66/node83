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

// --- Our realisation

// console.log(process.argv)

// const actionIndex = process.argv.indexOf('--action')
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1]
//   invokeAction({action})
// }

// -- Yargs

// const yargs = require('yargs')
// const { hideBin } = require('yargs/helpers')

// const commandsArray = hideBin(process.argv)

// const { argv } = yargs(commandsArray)
// // console.log(argv)

// invokeAction(argv)


// -- Commander

const { program } = require("commander");

program
  .option("-a, --action <type>", "Get all books from file")
  .option("-i, --id <type>")
  .option("-t, --title <type>")
  .option("-at, --author <type>");

// program.parse(process.argv)
program.parse()

const options = program.opts()
console.log('options = ', options)

invokeAction(options)