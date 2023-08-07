const express = require('express');

const router = express.Router();

const controller = require('./userController');

router.post('/login', controller.loginUser);
router.post('/signup', controller.signUpUser);
router.get('/users', controller.getUsers);

router.delete('/users', controller.deleteAllUsers)
router.delete('/users/:id', controller.deleteUserById)

// router.get('/:orderId', controller.getAnOrderById);
// router.delete('/:orderId', controller.deleteAnOrderById);

module.exports = router;
