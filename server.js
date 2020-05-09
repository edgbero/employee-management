var express = require('express');
var app = express();
app.use(express.static("mainApp")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
app.listen(8080, 'localhost');
console.log("Open your browser on port http://localhost:8080");