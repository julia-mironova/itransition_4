const { Schema, model } = require('mongoose');

const User = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    registerDate: { type: String, required: true },
    lastLoginDate: { type: String, required: false },
    status: { type: String, required: true },
});

module.exports = model('User', User);
