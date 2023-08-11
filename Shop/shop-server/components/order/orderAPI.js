const express = require('express');

const router = express.Router();

const controller = require('./orderController');

// router.get('/order', controller.getOrdersByUserId);
// router.post('/order', controller.createAnOrder);

// router.get('/order/:orderId', controller.getAnOrderById);
// router.delete('/order/:orderId', controller.deleteAnOrderById);
// router.delete('/order', controller.deleteAllOrders);

module.exports = router;
