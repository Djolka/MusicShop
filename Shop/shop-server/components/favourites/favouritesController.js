const mongoose = require('mongoose');

const Favourites = require('./favouritesModel');

module.exports.addNewFavourite = async function (req, res, next) {
    const favourite = new Favourites({
        _id: new mongoose.Types.ObjectId(),
        customerId: req.body.customerId,
        product: req.body.product
    })

    try {
        const savedFav = await favourite.save()
        res.status(201).json(savedFav)
    } catch (err) {
        next(err);
    }
};

module.exports.getFavouritesByUserId = async function (req, res, next) {
    const userId = req.params.id;

    try {
        const favourite = await Favourites.find({customerId: userId}).populate('product').exec();

        if (!favourite) {
            return res
                .status(404)
                .json({})
        }else {
            res.status(200).json(favourite)
        }
    } catch (err) {
        next(err);
    }
};

module.exports.deleteFavourite = async function (req, res, next) {
    const userId = req.params.userId 
    const productId = req.params.productId 

    try {
        await Favourites.deleteOne({ customerId: userId, product: productId }).exec();
        res.status(200).json({});
    } catch (err) {
        next(err);
    }
};

module.exports.findFavourite = async function (req, res, next) {
    customerId = req.body.customerId
    productId = req.body.product

    try {
        const fav = await Favourites.findOne({ customerId: customerId, product: productId }).populate('product').exec()

        if(fav) {
            res.status(200).json({found: true});
        } else {
            res.status(200).json({found: false});
        }
    } catch (err) {
        next(err);
    }
};

module.exports.getAllFavourites = async function (req, res, next) {
    try {
        const favs = await Favourites.find({}).populate('product').exec();

        if(!favs){
            return res.status(404).json({message: "nema favorita"})
        }
        res.status(200).json(favs);    
    } catch (err) {
        next(err);
    }
};

module.exports.deleteAllFavourites = async function (req, res, next) {
    const userId = req.params.userId 
    const productId = req.params.productId 

    try {
        const favs = await Favourites.deleteMany({})
        res.status(200).json(favs);        
    } catch (err) {
        next(err);
    }
};