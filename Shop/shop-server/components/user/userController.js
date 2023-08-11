const mongoose = require('mongoose');

const User = require('./userModel');

module.exports.loginUser = async function (req, res, next) {
    try {
        const user = await User.findOne({email: req.body.email, password: req.body.password});

        if(user) {
            res.status(200).json(user)
        } else { 
            console.log(user)
            res.status(404).send({})
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

module.exports.updateUser = async function (req, res, next) {
    try {
        await User.updateOne({_id: req.params.id}, {$set: req.body}).exec()
        const user = await User.findById({_id: req.params.id}).exec() 

        res.status(200).json(user)
    } catch (err) {
        next(err);
    }
};

//za proveru
module.exports.getUserById = async function (req, res, next) {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId).exec()
        if (!user) {
        return res
            .status(404)
            .json({ message: 'The user does not exist' });
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};