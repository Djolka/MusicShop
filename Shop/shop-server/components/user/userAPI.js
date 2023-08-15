const express = require('express');

const router = express.Router();

const controller = require('./userController');

router.post('/login', controller.loginUser);
router.post('/signup', controller.signUpUser);
router.put('/update/:id', controller.updateUser)
router.get('/users', controller.getUsers);

router.delete('/users', controller.deleteAllUsers)
router.delete('/users/:id', controller.deleteUserById)

router.get('/user/:id', controller.getUserById);

module.exports = router;
