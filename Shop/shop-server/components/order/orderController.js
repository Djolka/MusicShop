const mongoose = require('mongoose');

const Order = require('./orderModel');

module.exports.getOrders = async function (req, res, next) {
    try {
        const orders = await Order.find({}).populate('products').exec();
        if(!orders) {
            return res
                    .status(404)
                    .json({ message: 'The order with given id does not exist' });
        }
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
};

module.exports.createAnOrder = async function (req, res, next) {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        customerId: req.body.customerId,
        products: req.body.products,
        totalPrice: req.body.totalPrice,
        date: req.body.date
    });
    try {
        const savedObject = await order.save();
        res.status(201).json(savedObject);
    } catch (err) {
        next(err);
    }
};

module.exports.deleteAllOrders = async function (req, res, next) {
    try {
        await Order.deleteMany().exec();

        res.status(200).json({ message: 'The orders are successfully deleted'});
    } catch (err) {
        next(err);
    }
};

module.exports.userOrders = async function (req, res, next) {
    const userId = req.params.id;

    try {
        const orders = await Order.find({customerId: userId}).populate('products').exec();
        if (!orders) {
            return res
                .status(404)
                .json({});
        }
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
};