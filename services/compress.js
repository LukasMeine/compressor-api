import axios from 'axios';
import ImageCompressor from 'image-compressor.js';

function Compressor(request, res) {
  this.request = request;
  this.response = res;
  
}

Compressor.prototype.compress = function() {
 
  new ImageCompressor(this.request.files.foo, {
    quality: .6,
    success(result) {
      const formData = new FormData();

      formData.append('file', result, result.name);

      // Send the compressed image file to server with XMLHttpRequest.
      axios.post('/path/to/upload', formData).then(() => {
        console.log('Upload success');
      });
    },
    error(e) {
      console.log(e.message);
    },
  });
 
  
}

export { Compressor }