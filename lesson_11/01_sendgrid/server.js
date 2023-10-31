const sendgrid = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API } = process.env

async function main() {
    try {
        sendgrid.setApiKey(SENDGRID_API)

        const email = {
            to: 'marchenkodanil97@gmail.com',
            from: 'marchenkodanil97@gmail.com',
            subject: 'Hello World',
            html: '<h1>Hello World</h1>',
            text: 'Hello World'
        }

        const response = await sendgrid.send(email)
        console.log("🚀 ~ file: server.js:19 ~ main ~ response:", response)
    } catch (error) {
        console.error('Application error', error)
    }
}

main()