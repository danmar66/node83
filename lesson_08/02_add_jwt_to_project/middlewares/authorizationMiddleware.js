const requestError = require("../helpers/requestError");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const wrapper = require('../helpers/controllerWrapper')

const { JWT_SECRET } = process.env;

const authorization = async (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.split(" ")[1];

    const { id } = jwt.verify(token, JWT_SECRET, {}, (err, data) => {
        if (err) {
            throw requestError(401, err.message);
        }

        return data;
    });
    req.user = await User.findById(id, { password: 0, createdAt: 0, updatedAt: 0 });

    next();
};

module.exports = {authorization: wrapper(authorization)};
