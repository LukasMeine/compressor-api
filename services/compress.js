const axios = require("axios");
const Window = require('window');
const window = new Window();
const log = require('captains-log');
var utilities = require("../helpers/utils.js");
var utils = new utilities();



const ImageCompressor = require("image-compressor.js");

function Compressor(request, res) {
  this.request = request;
  this.response = res;
}

Compressor.prototype.compress = function() {
    var req = this.request;
    utils.response({hehe:'askdhaskjh'})

};

module.exports =  Compressor;