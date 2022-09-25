const moongoose = require('mongoose')


const userSchema = moongoose.Schema({
   
    name: {
        type: String,
        required: [true, 'please enter your name ']
    },
    email: {
        type: String,
        required: [true, 'please enter your email '],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please enter your password ']
    }
}, {
    timestamps: true
})

module.exports = moongoose.model('Users', userSchema)