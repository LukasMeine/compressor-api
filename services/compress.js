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

};

module.exports = { Compressor };