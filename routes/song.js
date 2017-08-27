/**
 * Created by garci on 26/08/2017.
 */

'use strict'

var express = require('express');
var SongController = require('../control/song');
var api = express.Router();
var md_auth = require('../middleware/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/songs'});

api.get('/song', md_auth.ensureAuth, SongController.getSong);

module.exports = api;