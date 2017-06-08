/**
 * Created by joaquinjimenezgarcia on 01/06/2017.
 */

'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/openfy', (err, res) => {
    if (err){
        throw err;
    } else {
        console.log("La conexión a la base de datos está corriendo perfectamente...");
        app.listen(port, function () {
            console.log("Servidor del api rest de musica escuchando en puerto " + port)
        });
    }
});