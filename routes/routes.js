app.get('/todo', function(req, res) {
  res.json({title: 'Return some JSON data', complete: false});
});
