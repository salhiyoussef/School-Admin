const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const app = express();

// C O N F I G U R A T I O N   D A T A   B A S E
require('./db')(mongoose);

// M I D D E L W A R E
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// R O U T E R S
const router = require('./routes');
app.use(process.env.API_LINK, router);

// E R R O R S 
require('./errors')(app);

module.exports = app;