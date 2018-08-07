var mongoose = require('mongoose'),
		esquema = mongoose.Schema

// Modelo del esquema
var	esquema_usuario = new esquema({
	nombre: {type: String},
	email: {type: String, unique: true, lowercase: true},
	clave: {type: String, required: true, lowercase: true}
})


// Exportacón del módulo
module.exports = mongoose.model('Usuario', esquema_usuario)