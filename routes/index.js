var express = require('express');
var router = express.Router();
const compressor = require('../services/compress.js')

/* GET home page. */
router.post('/', function(req, res, next) {
    
    let Compressor = new compressor(req,res)
    let compress = compressor.Compressor();
    compress.compress();
  
});

module.exports = router;