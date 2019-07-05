const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = new Schema({
    title :{
        type:String,
        required: true
    },
    options : [{
        type:String,
        required: true
    }],
    answer: {
        type: String,
        required: true
    },
    category: {
        type:String,
        required: true
    }
}, {timestamps: true} );

module.exports = mongoose.model('Question', questionSchema);