'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configGlobal = require('./config/global');
const configDB = require('./config/db');
const db = require('./routes/db');
const port = process.env.PORT || configGlobal.port;
const app = express();

mongoose.Promise = Promise;
mongoose.connect(configDB.db).then(
    () => {
        console.log('Connected to database');
        console.log('Connection string:');
        console.log(`${configDB.db}`);
    },
    (err) => console.log('Unable to connect to database: ' + err)
);

app.use(bodyParser.json());

app.use(express.static(`./dist/${configGlobal.project}`));
app.use('/', express.static(path.join(__dirname, `/dist/${configGlobal.project}/index.html`)));
app.use('/', db);
app.listen(port, () => console.log(`App listening on port ${port}`));
