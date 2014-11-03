// BASE SETUP
// ==============================================
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var path = __dirname + '/candm/';
// ROUTES
// ==============================================
// get an instance of router
var router = express.Router();

// apply the routes to our application
app.use('/', router);

// route middleware that will happen on every request
router.use(function(req, res, next) {

  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next();
});

app.use(express.static(path));

router.get('/', function(req, res) {
  var path = __dirname + '/candm/';
  res.sendFile(path + 'candm.html');
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('server started on ' + port);
