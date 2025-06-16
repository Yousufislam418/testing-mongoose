const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    password: String,
    date: Number
},
{
    collection: 'slys-messenger',
    versionKey: false
});

const User = mongoose.model('UserData', UserSchema);
module.exports = User;