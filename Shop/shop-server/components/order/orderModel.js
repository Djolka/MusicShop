const mongoose = require('mongoose');
const Product = require('../product/productsModel')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customerId: {
        type: String,
        required: true
    },
    products: [Product.schema],
    date: {
        type: Date,
        required: true 
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);