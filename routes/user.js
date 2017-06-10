/**
 * Created by joaquinjimenezgarcia on 02/06/2017.
 */
'use strict'

var express = require('express');
var UserContrller = require('../control/user');

var api = express.Router();
var md_auth = require('../middleware/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/users'});

api.get('/probando-controlador', md_auth.ensureAuth, UserContrller.pruebas);
api.post('/register', UserContrller.saveUser);
api.post('/login', UserContrller.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserContrller.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserContrller.uploadImage);

module.exports = api;