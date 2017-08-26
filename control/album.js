'use strict'

var path = require('path');
var fs = require('fs');
var mongosePaginate = require('mongoose-pagination');

var Artist = require('../model/artist');
var Album = require('../model/album');
var Song = require('../model/song');

function getAlbum(req, res) {
    var albumId = req.params.id;

    Album.findById(albumId).populate({path: 'artist'}).exec((err, album) => {
        if (err) {
            res.status(500).send({message: 'Error en la petición'});
        } else {
            if (!album) {
                res.status(404).send({message: 'No existe el album'});
            } else {
                res.status(200).send({album});
            }
        }
    });
}

function saveAlbum(req, res) {
    var album = new Album();
    var params = req.body;

    album.title = params.title;
    album.description = paramos.description;
    album.year = params.year;
    album.image = 'null';
    album.artist = params.artist;

    album.save((err, albumStored) => {
        if (err) {
            res.status(500).send({message: 'Error en la petición'});
        } else {
            if (!albumStored) {
                res.status(404).send({message: 'No se ha guardado el álbum'});
            } else {
                res.status(200).send({album: albumStored});
            }
        }
    });
}

module.exports = {
    getAlbum,
    saveAlbum
};