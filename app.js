/**
 * Created by joaquinjimenezgarcia on 01/06/2017.
 */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar Rutas
var user_routes = require('./routes/user');
var artis_routes = require('./routes/artist');

// Parsea los datos binarios de mondodb
// a json para poder verlos.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabezaras http

// Rutas base

app.use('/api', user_routes);
app.use('/api', artis_routes);

module.exports = app;