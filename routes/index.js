var express = require('express');
var router = express.Router();
const compress_service = require('../services/compress.js')

/* GET home page. */
router.post('/', function(req, res, next) {
    
    let Compressor = new compress_service.Compressor(req,res)
    Compressor.compress();
  
});

router.get('/', function(req, res, next) {
    
    res.send('porra');
  
});

module.exports = router;