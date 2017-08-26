/**
 * Created by garci on 26/08/2017.
 */
'use strict'

var express = require('express');
var AlbumController = require('../control/album');
var api = express.Router();
var md_auth = require('../middleware/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/album'});

api.get('/album/:id', md_auth.ensureAuth, AlbumController.getAlbum);
api.post('/album', md_auth.ensureAuth, AlbumController.saveAlbum);
api.get('/albums/:artist?', md_auth.ensureAuth, AlbumController.getAlbums);

module.exports = api;