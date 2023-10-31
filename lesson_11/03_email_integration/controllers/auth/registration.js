const User = require("../../models/user");
const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const sendEmail = require("../../helpers/sendEmail");

const registration = async (req, res, next) => {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const verifyEmailToken = nanoid();
    try {
        const user = await User.create({
            email,
            password: hashedPassword,
            verifyToken: verifyEmailToken
        });

        await sendEmail({
            to: email,
            subject: "Please, confirm your email",
            html: `<h1>Please, confirm your email</h1><a href="http://localhost:3000/api/auth/verify/${verifyEmailToken}">Click here to confirm your email</a>`,
        }).catch(err => console.error(err))

        res.status(201).json({id: user.id, email: user.email});
    } catch (error) {
        error = requestError(409, "This email already in use");
        throw error;
    }
};

module.exports = registration;
