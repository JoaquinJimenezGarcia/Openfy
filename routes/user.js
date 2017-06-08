/**
 * Created by joaquinjimenezgarcia on 02/06/2017.
 */
'use strict'

var express = require('express');
var UserContrller = require('../control/user');

var api = express.Router();
var md_auth = require('../middleware/authenticated');

api.get('/probando-controlador', md_auth.ensureAuth, UserContrller.pruebas);
api.post('/register', UserContrller.saveUser);
api.post('/login', UserContrller.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserContrller.updateUser);

module.exports = api;