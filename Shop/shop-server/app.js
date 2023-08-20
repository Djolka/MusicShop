const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./components/user/userAPI');
const productRoutes = require('./components/product/productsAPI');
const orderRoutes = require('./components/order/orderAPI');
const favouritesRoutes = require('./components/favourites/favouritesAPI');


const app = express();

// Connection with MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/PRODAVNICABP', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json({}));



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'OPTIONS, GET, POST, PATCH, DELETE, PUT'
        );

        return res.status(200).json({});
    }
    next();
});

// Routing
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/favourites', favouritesRoutes)



app.use(function (req, res, next) {
    const error = new Error('Zahtev nije podrzan od servera');
    error.status = 405;

    next(error);
});

app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
        error: {
            message: error.message,
            status: statusCode,
            stack: error.stack
        },
    });
});

module.exports = app;