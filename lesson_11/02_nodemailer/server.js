const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_API_USER, EMAIL_API_PASSWORD } = process.env

async function main() {
    try {
        const email = {
            to: "andry@gmail.com",
            from: "bob97@gmail.com",
            subject: "Hello World",
            html: "<h1>Hello World</h1>",
            text: "Hello World",
        };

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: EMAIL_API_USER,
                pass: EMAIL_API_PASSWORD,
            },
        });

        const response = await transport.sendMail(email);
        console.log("🚀 ~ file: server.js:23 ~ main ~ response:", response);
    } catch (error) {
        console.error("Application error", error);
    }
}

main();
