var express = require('express');
var router = express.Router();
const compressor = require('../services/compress.js')

/* GET home page. */
router.post('/', function(req, res, next) {
    
    let compress = compressor.Compressor(res,res);
    compress.compress();
  
});

module.exports = router;