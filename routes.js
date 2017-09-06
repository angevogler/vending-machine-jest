const machine = require('./machine');

function createRoutes(app) {
  /* ******** CUSTOMERS ******** */
  // get request to display list of current items for customer
  app.get('/vending/customer/items', function (req, res) {

  });

  // post request for customer to purchase an item
  app.post('/vending/customer/:productId/purchases', function (req, res) {

  });

  /* ******** VENDORS ******** */
  // get request for vendors to see total amount of money in the machine
  app.get('/vending/vendor/money', function (req, res) {

  });

  // get request for vendors to see list of purchases
  app.get('/vending/vendor/purchases', function (req, res) {

  });

  // post request for vendors to add new item to list
  app.post('/vending/vendor/items', function (req, res) {

  });

  // put request for vendor to update description, quantity, cost
  app.put('/vending/vendor/items/:productId', function (req, res) {

  });
/* ******** END OF FUNCTION ******** */
};

module.exports = createRoutes;
