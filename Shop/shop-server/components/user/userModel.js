const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // picture: {
        // type: ... ,
        // required: false,
    // },
    address: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);
