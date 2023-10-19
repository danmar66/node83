const requestError = require("../helpers/requestError");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const { JWT_SECRET } = process.env;

const authorization = async (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer") {
        throw requestError(401, "Token type is not allowed");
    }

    if (!token) {
        throw requestError(401, "Token is required");
    }

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id, {password: 0, createdAt: 0, updatedAt: 0})
        req.user = user
    } catch (error) {
        if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
            throw requestError(401, "Token is not valid");
        }
        throw error;
    }

    next();
};

module.exports = authorization;
