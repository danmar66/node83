const nodemailer = require('nodemailer');

const { EMAIL_API_USER, EMAIL_API_PASSWORD, EMAIL_ADDRESS } = process.env

const sendEmail = async ({to, subject, html}) => {
        const email = {
            from: EMAIL_ADDRESS,
            to,
            subject,
            html
        };

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: EMAIL_API_USER,
                pass: EMAIL_API_PASSWORD,
            },
        });

        await transport.sendMail(email);
}

module.exports = sendEmail