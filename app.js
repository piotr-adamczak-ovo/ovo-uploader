var express = require('express');
var path = require('path');
var multer  = require('multer');
var api = require('./routes/api');
var app = express();

app.use(multer(
    {
        dest: './.tmp/',
        inMemory: false
    }
));

app.use(express.static(__dirname + '/doc'));

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.use(express.static(path.join(__dirname, 'public')));
// logs every request
app.use(function(req, res, next){
    // output every request in the array
    console.log({method:req.method, url: req.url, device: req.device});
    next();
});

require('./routes/api')(app);

var runningPortNumber = process.env.PORT || 8080;

var server = app.listen(runningPortNumber, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Uploader app listening at http://%s:%s', host, port);
});