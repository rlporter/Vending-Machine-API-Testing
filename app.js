const express = require('express');
const app = express();
const router= express.Router();
const models = require('./models');

app.use('/', router);



if (require.main === 'module') {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.');
  });
}

module.exports = app;
