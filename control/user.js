/**
 * Created by joaquinjimenezgarcia on 02/06/2017.
 */
'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../model/user');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuarios del api rest con Node y Mondo'
    });
}

function saveUser(req, res){
    var user = new User();
    var params = req.body;

    console.log(params);

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';

    if (params.password){
        // Encriptar contraseña
        bcrypt.hash(params.password, null, null, function (err, hash) {
            user.password = hash;
            if (user.name != null && user.surname != null && user.email != null) {
                // Guarda usuario en base de datos
                user.save((err,userStored) =>{
                   if (err) {
                       res.status(500).send({message:'Error al guardar el usuario'});
                   } else {
                       if (!userStored){
                           res.status(404).send({message:'No se ha registrado el isiario'});
                       } else {
                           res.status(200).send({user: userStored});
                       }
                   }
                });
            } else {
                res.status(200).send({message: 'Rellena todos los campos'});
            }
        });
    } else {
        res.status(200).send({message: 'Introduce la contraseña'});
    }
}

function loginUser(req, res){
    var params = req.body;

    var email = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) =>{
       if (err){
           res.status(500).send({message: 'Error en la petición'});
       } else {
           if (!user) {
               res.status(404).send({message: 'El usuario no existe'});
           } else {
               // Comparamos las contraseñas
               bcrypt.compare(password, user.password, function (err, check){
                  if (check){
                      // Devolver datos de usuario logead
                      if (params.gethash){
                          // Devolver token de jwt
                      } else {
                          res.status(200).send({user});
                      }
                  } else {
                      res.status(404).send({message: 'Contraseña incorrecta'});
                  }
               });
           }
       }
    });
}

module.exports = {
    pruebas,
    saveUser,
    loginUser
};