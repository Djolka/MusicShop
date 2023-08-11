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

module.exports.loadProducts = async function (req, res, next) {

    // const product = new Product({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     price: req.body.price,
    //     description: req.body.description,
    //     type: req.body.type,
    //     color: req.body.color,
    //     manufacturer: req.body.manufacturer,
    //     countryOfOrigin: req.body.countryOfOrigin,
    //     picture: req.body.picture,
    // });

    try {
        // const savedProduct = await product.save();
        // res.status(201).json(savedProduct);
        await Product.insertMany(req.body)
        res.status(200).send()
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


// module.exports.signUpUser = async function (req, res, next) {
//     const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         lastName: req.body.lastName,
//         password: req.body.password,
//         // picture: req.body.picture, 
//         address: req.body.address,
//         country: req.body.country,
//         phoneNumber: req.body.phoneNumber,
//         email: req.body.email,
//     });
//     try {
//         const savedUser = await user.save();
//         res.status(201).json(savedUser);
//     } catch (err) {
//         next(err);
//     }
// };

// module.exports.getUsers = async function (req, res, next) {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (err) {
//         next(err);
//     }
// };



// module.exports.deleteUserById = async function (req, res, next) {
//     const userId = req.params.id

//     try {
//         await User.deleteOne({_id: userId}).exec();
//         res.status(200).json({message: 'User is successfully deleted'});
//     } catch (err) {
//         next(err);
//     }
// };




// module.exports.deleteAnOrderById = async function (req, res, next) {
//   const orderId = req.params.orderId;

//   try {
//     await Order.deleteOne({ _id: orderId }).exec();
//     res.status(200).json({ message: 'The order is successfully deleted' });
//   } catch (err) {
//     next(err);
//   }
// };
