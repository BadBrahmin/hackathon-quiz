const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let resultSchema = new Schema({
    user :{
        type: Schema.Types.ObjectId, ref: "User",
        required: true
    },

    set :[{ question: 
        {type: Schema.Types.ObjectId, ref: "Question",
        required: true},
        correct: Boolean
    }]

}, {timestamps: true} );

module.exports = mongoose.model('Result', resultSchema);