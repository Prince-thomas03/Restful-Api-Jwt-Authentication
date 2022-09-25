const moongoose = require('mongoose')

const goalSchema = moongoose.Schema({
    text: {
        type: String,
        required: [true, 'please add a new text']
    }
},
    {
        timestamps: true
    })

module.exports = moongoose.model('Goal',goalSchema)