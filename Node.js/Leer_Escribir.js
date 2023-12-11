
// Leer y escribir en consola

var nombre;
var respuestas = [];
var preguntas = [
	'Cual es tu nombre?',
	'Cuantos años tienes?',
	'Lenguaje de programacion favorito?'
];

// Mostrar preguntas al usuario
function Pregunta(num){
	process.stdout.write(preguntas[num]);
}

// Guarda un dato y lo muestra en un mensaje
process.stdin.on('data', function(data){
	respuestas.push(data.toString().trim());

	if(respuestas.length < preguntas.length){
		Pregunta(respuestas.length);
		
	}else{
		process.exit();
	}
});

// Iniciar proceso
Pregunta(0);