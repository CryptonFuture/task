const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true,'Please add a Task']
    }
}, {
   timestamps: true 
})

module.exports = mongoose.model('Task', todoSchema)