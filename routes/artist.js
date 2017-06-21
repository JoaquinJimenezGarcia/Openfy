/**
 * Created by garci on 21/06/2017.
 */
'use strict'

var express = require('express');
var ArtistController = require('../control/artist');
var api = express.Router();
var md_auth = require('../middleware/authenticated');

api.get('/artist', md_auth.ensureAuth, ArtistController.getArtist);
api.post('/artist', md_auth.ensureAuth, ArtistController.saveArtist);

module.exports = api;