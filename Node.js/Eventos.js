
// Modulo
const events = require('events');
const emitter =  new events.EventEmitter();

var Persona = function(nombre){
	this.nombre = nombre;
}

let persona = new Persona('Bob');
console.log(`Me llamo ${persona.nombre}`);

emitter.on('eventoCustom', (mensaje, estatus) => {
	console.log(`${estatus}: ${mensaje}`);
});

emitter.emit('eventoCustom', 'Mensaje cargado con exito', 200);