const User = require('../../models/user')
const bcrypt = require('bcrypt')
const requestError = require('../../helpers/requestError')

const login = async (req, res, next) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        throw requestError(401, "Email is not valid")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw requestError(401, "Password is not valid")
    }
    
    res.status(200).json({token: "<TOKEN>"})
};

module.exports = login;
