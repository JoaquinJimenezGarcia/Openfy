'use strict'

var path = require('path');
var fs = require('fs');
var mongosePaginate = require('mongoose-pagination');

var Artist = require('../model/artist');
var Album = require('../model/album');
var Song = require('../model/song');

function getSong(req, res) {
    var songId = req.params.id;

    Song.findById(songId).populate({path:'album'}).exec((err, song) => {
        if (err) {
            res.status(500).send({message: 'Error en la petición'});
        } else {
            if (!song) {
                res.status(404).send({message: 'La canción no existe'});
            } else {
                res.status(200).send({song});
            }
        }
    });
}

function getSongs(req, res) {
    var albumId = req.params.album;
    var find;

    if (!albumId) {
        find = Song.find({}).sort('number');
    } else {
        find = Song.find({album: albumId}).sort('number');
    }

    find.populate({
        path: 'album',
        populate: {
            path: 'artist',
            model: 'Artist'
        }
    }).exec(function (err, songs) {
        if (err) {
            res.status(500).send({message: 'Error en la petición'});
        } else {
            if (!songs) {
                res.status(404).send({message: 'No hay canciones'});
            } else {
                res.status(200).send({songs});
            }
        }
    });
}

function updateSong(req, res) {
    var songId = req.params.id;
    var update = req.body;

    Song.findbyIdAndUpdate(songId, update, (err, songUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (!songUpdated) {
                res.status(404).send({message: 'No se ha actualizado la canción'});
            } else {
                res.status(200).send({song: songUpdated});
            }
        }
    });
}

function deleteSong(req, res) {
    var songId = req.params.id;

    Song.findByIdAndRemove(songId, (err, songRemoved) => {
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (!songRemoved) {
                res.status(404).send({message: 'No se ha borrado la canción'});
            } else {
                res.status(200).send({song: songRemoved});
            }
        }
    })
}

function saveSong(req, res) {
    var song = new Song();
    var params = req.body;

    song.number = params.number;
    song.name = params.name;
    song.duration = params.duration;
    song.file = null;
    song.album = params.album;

    song.save((err, songStored) => {
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (!songStored) {
                res.status(404).send({message: 'No se ha guardado la canción'});
            } else {
                res.status(200).send({song: songStored});
            }
        }
    });
}

module.exports = {
    getSong,
    saveSong,
    getSongs,
    updateSong,
    deleteSong
};