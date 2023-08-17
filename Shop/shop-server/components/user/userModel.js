const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
});

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model('User', userSchema);
