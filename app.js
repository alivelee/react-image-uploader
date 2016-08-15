var express = require('express');
var app = express();
const path = require('path');
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'static'));
app.use('/static', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });

app.listen(process.env.PORT || 8080);