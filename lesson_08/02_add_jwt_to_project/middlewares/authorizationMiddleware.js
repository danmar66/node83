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

    // const authHeader = req.headers.authorization || "";
    // const [type, token] = authHeader.split(" ");

    // if (type !== "Bearer") {
    //     throw requestError(401, "Token type is not allowed");
    // }

    // if (!token) {
    //     throw requestError(401, "Token is required");
    // }

    // try {
    //     const { id } = jwt.verify(token, JWT_SECRET);
    //     const user = await User.findById(id, { password: 0, createdAt: 0, updatedAt: 0 });
    //     req.user = user;
    // } catch (error) {
    //     if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
    //         throw requestError(401, "Token is not valid");
    //     }
    //     throw error;
    // }

    // next();
};

module.exports = {authorization: wrapper(authorization)};
