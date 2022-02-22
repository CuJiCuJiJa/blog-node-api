const mongoose = require('mongoose') 
const { Schema, model } = mongoose

//----Schema----//
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    passHash: String
})
//----Formateo el _id----//
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passHash
    }
})

const User = new model('User', userSchema)

module.exports = User