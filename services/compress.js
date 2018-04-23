const axios = require("axios");
const Window = require('window');
const window = new Window();
const log = require('captains-log');


const ImageCompressor = require("image-compressor.js");

function Compressor(request, res) {
  this.request = request;
  this.response = res;
}

Compressor.prototype.compress = function() {
    var req = this.request;
    log.info('hehehe')
  new ImageCompressor(req.files.foo, {
    quality: 0.4,
    success(result) {
        log.info('sjahdkah')
      console.log(result);
    },
    error(e) {
        log.info('hehe')
      console.log(e.message);
    }
  });
};

module.exports = { Compressor };