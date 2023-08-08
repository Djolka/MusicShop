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
    desctiption: {
        type: String,
        required: true
    },
    noOfString: {
        type: Number, 
        required: false
    },
    manufacturer: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: false
    },
    // picture: {
        // type: ... ,
        // required: true,
    // },    
});

module.exports = mongoose.model('Product', productSchema);