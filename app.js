var express = require('express');

var server = express.createServer();

app.get('/', function(q, s) {
    q.send('Hello ExpressJS');
});

app.listen(12976);