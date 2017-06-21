/**
 * Created by garci on 21/06/2017.
 */
'use strict'

var path = require('path');
var fs = require('fs');

var Artist = require('../model/artist');
var Album = require('../model/album');
var Song = require('../model/song');

function getArtist(req, res) {
    res.status(200).send({message:"Método get Artist del controlador artist.js"});
}

module.exports = {
    getArtist
};