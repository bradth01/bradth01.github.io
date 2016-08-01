'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(1337, function() {
    console.log('listening on port 1337');
});

app.get('/', function(req, res, next){
    res.status(200).sendFile(path.join(__dirname, './index.html'));
});

app.use(function(err, req, res, next){
    console.error(err);
    res.status(500).send(err);
});
