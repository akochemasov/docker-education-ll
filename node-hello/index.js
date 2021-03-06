const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', function(req, res) {
  res.send('Hello Node');
})

app.listen(port, function() {
  console.log(`Server running on http://localhost:${port}`);
})

process.on('SIGINT', function() {
  process.exit();
});