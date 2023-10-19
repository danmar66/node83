const jwt = require('jsonwebtoken')

const JWT_secret = 'WARNING secret key'

async function main() {
    const payload = { id: '124612346714541', email: "test@example.com"}
    const token = jwt.sign(payload, JWT_secret, {expiresIn: '15s'})
    console.log(token)

    try {
        const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNDYxMjM0NjcxNDU0MSIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTY5NzczNTA4NCwiZXhwIjoxNjk3NzM1MDk5fQ.UaC138R3aeiU60-RUvDinUkdMDTLY6ULSZzvE7WZYHA'
        const result = jwt.verify(expiredToken, JWT_secret)
        console.log("🚀 ~ file: server.js:12 ~ main ~ result:", result)
    } catch (error) {
        console.error('verify failed:', error)
    }

}

main()