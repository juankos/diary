
const 	express = require('express'),
		bodyParser = require('body-parser'),
		session = require('express-session'),
		RutaUsuarios = require('./controlador/usuario'),
		RutaCrearUsuarios = require('./controlador/crear_usuario'),
		RutaEventos = require('./controlador/evento'),
		app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', express.static(__dirname + '/vista'));


// Código para sesiones
app.use(session({
	secret: 'EstaEsMiClaveSecreta_123456_JuanNavarroBenito',
	cookie: {maxAge: 72000000},
	resave: false,
	saveUninitialized: true
}));


// Código para inlcuir módulos
app.use('/usuarios', RutaUsuarios)
app.use('/usuarios', RutaCrearUsuarios)
app.use('/eventos', RutaEventos)


//Exportación del módulo
module.exports = app