
var express = require('express');
var app = express();
app.use(express.static(__dirname)); 
console.log('Listening on 8888');
app.listen(process.env.PORT || 8888);
