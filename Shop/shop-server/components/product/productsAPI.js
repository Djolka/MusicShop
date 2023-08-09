const express = require('express');

const router = express.Router();

const controller = require('./productsController');

router.get('/', controller.getProducts);
router.post('/', controller.loadProducts);
router.get('/:id', controller.getProductById)
// router.post('/signup', controller.signUpUser);


router.delete('/', controller.deleteAllProducts)
// router.delete('/users/:id', controller.deleteUserById)

// router.get('/:orderId', controller.getAnOrderById);
// router.delete('/:orderId', controller.deleteAnOrderById);

module.exports = router;