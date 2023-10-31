const User = require('../../models/user')
const requestError = require('../../helpers/requestError')

const verify = async (req, res) => {
    const { token } = req.params
    const user = await User.findOne({ verifyToken: token})

    if (!user) {
        throw requestError(400, "Verify token is not valid")
    }

    await User.findByIdAndUpdate(user.id, { verified: true, verifyToken: null })

    return res.json({message: "Successfully confirmed"})
}

module.exports = verify;