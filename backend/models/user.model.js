const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema =  new mongoose.Schema({
    fullname:{
        firstname :{
            type: String,
            required: true,
            minlength: [1 , 'first name must be 2 characters'],
            maxlength: 50
        },
        lastname :{
            type: String,
            required: false,
            minlength: [1 , 'last name must be 2 characters'],
            maxlength: 50
        },

    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address']
    },
    password: {
        type: String,
        required: true,
        select: false
    },

    socketID: {
        type: String
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    return token;
}

userSchema.methods.comparePassword = async function (password ){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password , 10)
}

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;