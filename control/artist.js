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

function saveArtist(req,res) {
    var artist = new Artist();
    var params = req.body;

    artist.name = params.name;
    artist.description = params.description;
    artist.image = 'null';

    artist.save((err, artistStored) => {
        if (err) {
            res.status(500).send({message:"Error al guardar el artista"});
        } else {
            if (!artistStored) {
                res.status(404).send({message:"El artista no ha sido guardado"});
            } else {
                res.status(200).send({artist: artistStored});
            }
        }
    });
}

module.exports = {
    getArtist,
    saveArtist
};