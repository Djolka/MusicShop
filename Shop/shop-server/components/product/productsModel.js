const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: false
    },
    picture: [{
        type: String ,
        required: true,
    }],
    quantity: {
        type: Number, 
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);