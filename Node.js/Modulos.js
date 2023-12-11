
// Modulos
var path = require('path');
var util = require('util');

// Unir como ruta
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));

util.log("Hola");

var nombre = "Lisa";
var edad = 15;
var texto = util.format("Hola %s, tienes %d años", nombre, edad);

console.log(texto);

// Estadisticas
var v8 = require('v8');

console.log(v8.getHeapStatistics());