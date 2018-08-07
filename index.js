
const express = require('express'),
		mongoose = require('mongoose'),
		app = require('./app'),
		port = process.env.PORT || 3000


// Código para conectar servidor y DB
mongoose.connect('mongodb://localhost:27017/AgendaDB', {useMongoClient: true}, (err, res) => {
	if (err) return console.log('Error en la conexión con la base de datos '+err)
	
	console.log('Conexión establecida con la base de datos -AgendaDB- en el puerto:27017')

	
	app.listen(port, function() {
  		console.log('Servidor corriendo en http://localhost:'+port)
	})
})
