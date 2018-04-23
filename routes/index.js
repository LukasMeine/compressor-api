var express = require('express');
var router = express.Router();
const compressor = require('../ervices/compress.js')

/* GET home page. */
router.post('/', function(req, res, next) {
    
    var compress = compressor.Compressor(res,res);
    compress.compress();
  
});

module.exports = router;