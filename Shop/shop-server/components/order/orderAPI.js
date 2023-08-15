const express = require('express');

const router = express.Router();

const controller = require('./orderController');

router.get('/getOrders', controller.getOrders);
router.post('/createOrder', controller.createAnOrder);
router.get('/userOrders/:id', controller.userOrders);

router.delete('/deleteOrders', controller.deleteAllOrders);
// router.get('/order/:orderId', controller.getAnOrderById);
// router.delete('/order/:orderId', controller.deleteAnOrderById);


module.exports = router;
