const express = require('express');
const routes = require('./routes');

// configure express servers
const app = express();

// set up routes
routes(app);

// start server
app.listen(4000, function () {
  console.log('server running');
});
