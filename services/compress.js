const axios = require("axios");
const Window = require('window');
const window = new Window();
const fileUpload = require('express-fileupload');
const ImageCompressor = require("image-compressor.js");

function Compressor(request, res) {
  this.request = request;
  this.response = res;
}

Compressor.prototype.compress = function() {
    var req = this.request;
  new ImageCompressor(req.files.foo, {
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