'use strict'

var path = require('path');
var fs = require('fs');
var mongosePaginate = require('mongoose-pagination');

var Artist = require('../model/artist');
var Album = require('../model/album');
var Song = require('../model/song');

function getSong(res, req) {
    res.status(200).send({message: 'Controlador canción'});

}

module.exports = {
    getSong
}