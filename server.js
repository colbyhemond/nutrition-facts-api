const express = require('express');
const MongoClient  = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
var cors = require('cors')

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }), cors());

require('./app/routes')(app, {});
app.listen(process.env.PORT || port, () => {  console.log('We are live on ' + port);});
