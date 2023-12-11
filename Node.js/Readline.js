
// Modulo
var readline = require('readline');
var util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);
var personas = {
	nombre: '',
	comentarios: []
};

rl.question('Cual es tu nombre? ', (respuesta) => {
	personas.nombre = respuesta;

	rl.setPrompt('Dime un comentario: ');
	rl.prompt();
});

rl.on('line', (input) => {

	if (input.trim() === 'salir'){
		var mensaje = util.format("Te llamas %s y este es tu comentario: %j", personas.nombre, personas.comentarios);
		console.log(mensaje);

		process.exit();
	}

	personas.comentarios.push(input.trim());
	rl.setPrompt('Dime un comentario: ');
	rl.prompt();
});