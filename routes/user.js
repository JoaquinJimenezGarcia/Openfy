/**
 * Created by joaquinjimenezgarcia on 02/06/2017.
 */
'use strict'

var express = require('express');
var UserContrller = require('../control/user');

var api = express.Router();

api.get('/probando-controlador', UserContrller.pruebas);
api.post('/register', UserContrller.saveUser);
api.post('/login', UserContrller.loginUser);

module.exports = api;