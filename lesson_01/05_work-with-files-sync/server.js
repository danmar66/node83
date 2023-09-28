const fs = require("fs");

const filePath = "./data.txt";

const fileOperations = ({ action, data }) => {
  switch (action) {
    case "read":
      const result = fs.readFileSync(filePath, 'utf-8')
      console.log(result);
      break;

    case "add":
      const append = fs.appendFile(filePath, data);
      break;
    case "replace":
      const replace = fs.writeFile(filePath, data);
      console.log(replace);
      break;

    case "rename":
      fs.rename(filePath, "./newpath/data2.txt");
      break;
    case "remove":
      fs.unlink(filePath);
      break;
    default:
      console.log("Unknown action");
      break;
  }
};

// fileOperations({ action: "read" });
// fileOperations({ action: "add", data: "Рок Лі" });
// fileOperations({ action: "replace", data: "Тільки люди здатні проливати кров за мир у всьому світі\n\nЦитата" });
// fileOperations({ action: "rename"});
// fileOperations({ action: "remove" });

fs.readFile(filePath, 'utf-8', function(error, data) {
  console.log('Async reading file')
  if (error) throw error
  console.log(data)
})

console.log('Sync file reading')
const syncFile = fs.readFileSync(filePath, 'utf-8')
console.log(syncFile)