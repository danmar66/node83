const base64 = require('base-64')

async function main() {
    const password = 'very strong password'

    const encodedPassword = base64.encode(password)
    console.log(encodedPassword)
}

main()