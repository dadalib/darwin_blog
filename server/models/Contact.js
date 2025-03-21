const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Module
const ContactSchema = new Schema({
    name:{
        type: String,
        required : [true,"name is required."],
    },
    email:{
        type: String,
        unique:true,
        required : [true,"Email is required."],
        match:[/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
            "Invalid email adress"],
    },
    body:{
        type: String,
        required : true
    },

    date: {
        type:Date,
        default : Date.now,
    },

});

// Export module
module.exports = mongoose.model('Contact',ContactSchema);