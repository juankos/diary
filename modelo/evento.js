
const mongoose = require('mongoose'),
		esquema = mongoose.Schema

// Modelo del esquema
var	esquema_evento = new esquema({
	id_usuario: {type: esquema.ObjectId, ref: "Usuario" },
	title: {type: String, required: true},
	start: {type: String, required: true},
	end: {type: String, required: false}
})


// Código de exportación del módulo
module.exports = mongoose.model('Evento', esquema_evento)