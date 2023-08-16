const express = require('express');

const router = express.Router();

const controller = require('./favouritesController');

router.post('/addFavourites', controller.addNewFavourite)
router.get('/getFavourites/:id', controller.getFavouritesByUserId)
router.delete('/deleteFavourite/:userId/:productId', controller.deleteFavourite)
router.post('/findFavourite', controller.findFavourite)

router.get('/getAllFavourites', controller.getAllFavourites)
router.delete('/deleteAllFavourites', controller.deleteAllFavourites)

module.exports = router;
