const bcrypt = require("bcrypt");

async function main() {
    // const password = "very strong password";

    // // const salt = await bcrypt.genSalt()

    // const savedSalt = "$2b$10$gizv8bCiY5xt7UAYric9HO";
    // // console.log("🚀 ~ file: server.js:7 ~ main ~ salt:\n", salt)

    // const hashedPassword = await bcrypt.hash(password, savedSalt);
    // // console.log("🚀 ~ file: server.js:7 ~ main ~ hashedPassword:\n", hashedPassword)

    // const isMatch = await bcrypt.compare('asdfasdf', hashedPassword);
    // console.log("🚀 ~ file: server.js:15 ~ isMatch:", isMatch);

    const password = "very strong password";

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🚀 ~ file: server.js:20 ~ main ~ hashedPassword:\n", hashedPassword)

    const isMatch = await bcrypt.compare("very strong password", hashedPassword);
    console.log("🚀 ~ file: server.js:15 ~ isMatch:", isMatch);
}

main();
