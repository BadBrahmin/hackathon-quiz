const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name :{
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    username: {
        type:String,
        // required: true
    },
    photo: {
        type:String,
    },
    isAdmin: {type: Boolean, default: false}
}, {timestamps: true} );

userSchema.pre('save', function(next) {
    // this will have the user data passed on while we call User.create()
    if(this.email) {
        this.email ==="gemharedu@gmail.com";
        this.isAdmin = true;
        next();
    }
});
module.exports = mongoose.model('User', userSchema);