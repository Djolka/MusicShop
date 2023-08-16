const express = require('express');

const router = express.Router();

const controller = require('./productsController');

router.get('/productList', controller.getProducts);
router.get('/:id', controller.getProductById)
router.post('/insertMany', controller.insertProducts)

router.delete('/deleteAll', controller.deleteAllProducts)

module.exports = router;