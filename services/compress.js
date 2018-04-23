const axios = require("axios");
const Window = require('window');
const window = new Window();
const ImageCompressor = require("image-compressor.js");

function Compressor(request, res) {
  this.request = request;
  this.response = res;
}

Compressor.prototype.compress = function() {
  new ImageCompressor(this.request.files.foo, {
    quality: 0.4,
    success(result) {
      console.log(result);
    },
    error(e) {
      console.log(e.message);
    }
  });
};

module.exports = { Compressor };