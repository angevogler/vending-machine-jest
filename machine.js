const Sequelize = require('sequelize');
const bodyparser = require('body-parser');

/* ******** CREATE NEW DATABASE ******** */
const db = new Sequelize ('vending2', 'angelavogler', '', {
  dialect: 'postgres',
})

/* ******** PRODUCT SCHEMA ******** */

const Product = db.define('product', {
    name: { type: Sequelize.STRING(20), allowNull: false },
    description: Sequelize.STRING(200),
    cost: { type: Sequelize.REAL, allowNull: false },
    quantity: { type: Sequelize.INTEGER, allowNull: false }
});

// sync schema
Product.sync().then(function () {
    console.log('product synched');

    // Product.create ({
    //   name: 'UTZ Crab Chips',
    //   description: 'Old Bay flavored potato chips',
    //   cost: 1,
    //   quantity: 25,
    // });
});

/* ******** PURCHASES SCHEMA ******** */

// create schema
const Purchases = db.define('purchases', {
  name: { type: Sequelize.STRING(20), allowNull: false },
  cost: { type: Sequelize.INTEGER, allowNull: false }
})

// synch schema

Purchases.sync().then(function () {
  console.log('purchases synched');
});




module.exports = {

};
