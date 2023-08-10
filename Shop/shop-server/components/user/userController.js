const mongoose = require('mongoose');

const User = require('./userModel');

module.exports.loginUser = async function (req, res, next) {
    try {
        const user = await User.findOne({email: req.body.email, password: req.body.password});

        if(user) {
            res.status(200).json(user)
        } else { 
            res.status(404).send()
        }
    } catch (err) {
        next(err);
    }
};

module.exports.signUpUser = async function (req, res, next) {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        lastName: req.body.lastName,
        password: req.body.password,
        address: req.body.address,
        country: req.body.country,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
    });
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        next(err);
    }
};

module.exports.getUsers = async function (req, res, next) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

module.exports.deleteAllUsers = async function (req, res, next) {
    try {
        const users = await User.deleteMany({});
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

module.exports.deleteUserById = async function (req, res, next) {
    const userId = req.params.id

    try {
        await User.deleteOne({_id: userId}).exec();
        res.status(200).json({message: 'User is successfully deleted'});
    } catch (err) {
        next(err);
    }
};


// module.exports.getAnOrderById = async function (req, res, next) {
//   const orderId = req.params.orderId;

//   try {
//     const order = await Order.findById(orderId).populate('products').exec();
//     if (!order) {
//       return res
//         .status(404)
//         .json({ message: 'The order with given id does not exist' });
//     }
//     res.status(200).json(order);
//   } catch (err) {
//     next(err);
//   }
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
