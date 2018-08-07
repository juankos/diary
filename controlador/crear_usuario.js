
const Router = require('express').Router(),
      Usuario = require('../modelo/usuario')


  // Código para buscar y verificar usuarios y crearlos si son nuevos
  Router.get('/buscar_y_verificar_usuarios', function(req, res) {
    Usuario.find({}, (err, usuarios) => {
      if (err) {
        return res.status(500).send({message: 'Error al intentar obtener los usuarios. (status:500)'})
      }else{
        if (usuarios.length <= 0) {
			//Agregar un nuevo Usuario de sistema 
			let nuevoUsuario1 = new Usuario()
			nuevoUsuario1.nombre = 'Juan Navarro Benito'
			nuevoUsuario1.email = 'jnb@mail.com'
			nuevoUsuario1.clave = '123456'
			nuevoUsuario1.save((err, usuario1) => {
			  	if (err) return res.status(500).send({message: 'Error al intentar insertar el usuario1. (status:500)'})
			})

			//Agregar un nuevo Usuario de sistema 
			let nuevoUsuario2 = new Usuario()
			nuevoUsuario2.nombre = 'Esther Sanca Hurtado'
			nuevoUsuario2.email = 'esanca@mail.com'
			nuevoUsuario2.clave = '123147'
			nuevoUsuario2.save((err, usuario2) => {
			  	if (err) return res.status(500).send({message: 'Error al intentar insertar el usuario2. (status:500)'})
			})			
        }else{
          return res.json(usuarios)
        } 
      } 
    })
  })


//Código para exportar el módulo
module.exports = Router

