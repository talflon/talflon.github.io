const path = require('path');

module.exports = {
  entry: {
    elix_carousel: './node_modules/elix/define/Carousel.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js'
  }
};
