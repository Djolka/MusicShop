const express = require('express');

const router = express.Router();

const controller = require('./productsController');

router.get('/', controller.getProducts);
// router.post('/login', controller.loginUser);
// router.post('/signup', controller.signUpUser);


// router.delete('/users', controller.deleteAllUsers)
// router.delete('/users/:id', controller.deleteUserById)

// router.get('/:orderId', controller.getAnOrderById);
// router.delete('/:orderId', controller.deleteAnOrderById);

module.exports = router;