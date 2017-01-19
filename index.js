const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); //static are your frontend files
//backend files are index.js
app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
