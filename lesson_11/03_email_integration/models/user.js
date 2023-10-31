const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    books: {
        type: [Types.ObjectId],
        rel: 'book',
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verifyToken: {
        type: String,
        default: null,
    }
},{
    timestamps: true,
    versionKey: false,
})

const User = model('user', userSchema)

module.exports = User