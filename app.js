'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 1337, function() {
    console.log('listening on port %d in %s mode', this.address().port, app.settings.env);
});

app.get('/', function(req, res, next){
    res.status(200).sendFile(path.join(__dirname, './index.html'));
});

app.use(function(err, req, res, next){
    console.error(err);
    res.status(500).send(err);
});
