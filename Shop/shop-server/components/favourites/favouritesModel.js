const mongoose = require('mongoose');

const favouritesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customerId: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }
});

module.exports = mongoose.model('Favourites', favouritesSchema);