const express = require('express');
const app = express();


const models = require('./models');

if (require.main === 'module') {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.')
  });
}
module.exports = app;
