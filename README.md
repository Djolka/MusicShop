# MusicShop

Webshop for buying musical instruments using MEAN stack.

Make sure you have Node installed: [Node](https://nodejs.org/en/download) 
<br>
Make sure you have MongoDB installed: [MongoDB](https://www.mongodb.com/try/download/community)

## **How to run server:**
- Position yourself in _Shop/shop-server_ directory
- Run command: `npm install`
- Run command `nodemon server.js` to start server (on port 3000)

## **How to run client:**
- Position yourself in _Shop/shop-client_ directory
- Run command: `npm install`
- Run command `ng serve` to start client (on port 4200)

## **Database import:**
- Position yourself in _Shop/shop-server_
- Run command: <br>
`mongoimport --db PRODAVNICABP --collection products --file products.json`
