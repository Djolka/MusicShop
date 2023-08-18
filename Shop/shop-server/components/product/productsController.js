const mongoose = require('mongoose');

const Product = require('./productsModel');

module.exports.getProducts = async function (req, res, next) {
    try {
        const products = await Product.find({});

        res.status(200).json(products)
    } catch (err) {
        next(err);
    }
};


module.exports.getProductById = async function (req, res, next) {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId).exec()
        if (!product) {
            return res
                .status(404)
                .send()
        }

        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

module.exports.deleteAllProducts = async function (req, res, next) {
    try {
        const products = await Product.deleteMany({});
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};

module.exports.insertProducts = async function (req, res, next) {
    try {
        await Product.insertMany(req.body)
        res.status(200).send()
    } catch (err) {
        next(err);
    }
};

module.exports.filterProducts = async function (req, res, next) {

    const filterArray = [];
    for (const field in req.body) {
        if (req.body[field] === 1) {
            filterArray.push(field)
        }
    }

    try {
        const products = await Product.find({type: {$in: filterArray}});

        if (!products) {
            res.status(404).json({})
        }
        res.status(200).json(products)
    } catch (err) {
        next(err);
    }
};