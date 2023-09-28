const fs = require("fs/promises");

const filePath = "./data.txt";

const fileOperations = async ({ action, data }) => {
  switch (action) {
    case "read":
      //   const result = await fs.readFile(filePath)
      //   const text = result.toString()
      //   console.log(text);
      //   const result = await fs.readFile(filePath, {encoding: 'utf-8'});
      const result = await fs.readFile(filePath, "utf8");
      console.log(result);
      break;

    case "add":
      const append = await fs.appendFile(filePath, data);
      break;
    case "replace":
      const replace = await fs.writeFile(filePath, data);
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
