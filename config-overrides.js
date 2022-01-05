const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@videos': path.resolve(__dirname, 'src/assets/videos'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@data-access': path.resolve(__dirname, 'src/data-access'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      
    },
  };

  return config;
};
