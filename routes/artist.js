/**
 * Created by garci on 21/06/2017.
 */
'use strict'

var express = require('express');
var ArtistController = require('../control/artist');
var api = express.Router();
var md_auth = require('../middleware/authenticated');

api.get('/artist/:id', md_auth.ensureAuth, ArtistController.getArtist);
api.post('/artist', md_auth.ensureAuth, ArtistController.saveArtist);
api.get('/artist/:page?', md_auth.ensureAuth, ArtistController.getArtists);
api.put('/artist/:id', md_auth.ensureAuth, ArtistController.updateArtist);
api.delete('/artist/:id', md_auth.ensureAuth, ArtistController.deleteArtist);

module.exports = api;