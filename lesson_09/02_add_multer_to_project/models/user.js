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
    }
},{
    timestamps: true,
    versionKey: false,
})

const User = model('user', userSchema)

module.exports = User