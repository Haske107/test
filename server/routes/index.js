var express = require('express');
var router = express.Router();
const path = require('path');

// router.get('/', function (req, res, next) {
//   res.render('index');
// });

router.get('/*', function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + '../../dist/index.html'));
});

module.exports = router;
