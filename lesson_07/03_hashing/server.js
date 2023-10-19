const md5 = require('md5')

async function main() {
    const password = '<PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD><PASSWORD>'

    const password2 = password + 'sdfewrd'



    const encodedPassword = md5(password)
    const encodedPassword2 = md5(password2)
    console.log("🚀 ~ file: server.js:11 ~ main ~ encodedPassword:", encodedPassword)
    console.log("🚀 ~ file: server.js:12 ~ main ~ encodedPassword2:", encodedPassword2)

}

main()