const User = require("../../models/user");
const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");

const registration = async (req, res, next) => {
    try {
        // req.body.password = await bcrypt.hash(req.body.password, 10)
        // const user = await User.create(req.body)
        // res.status(201).json(user)

        const { email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
        });

        res.status(201).json(user);
    } catch (error) {
        error = requestError(409, "This email already in use");
        throw error;
    }
};

module.exports = registration;
