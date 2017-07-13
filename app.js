const express = require('express');
const app = express();
const models = require('./models');

app.get('/', function (req, res){
  res.json({});
});

if (require.main === 'module') {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.');
  });
}
module.exports = app;
