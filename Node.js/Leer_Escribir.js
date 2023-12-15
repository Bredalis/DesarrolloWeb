
// Leer y escribir en consola

var respuestas = [];
var preguntas = [
	'Cual es tu nombre?',
	'Cuantos años tienes?',
	'Lenguaje de programacion favorito?'
];

// Mostrar preguntas al usuario
function Mostrar_Pregunta(num){
	process.stdout.write(preguntas[num]);
}

// Guarda un dato y lo muestra en un mensaje
process.stdin.on('data', function(data){
	respuestas.push(data.toString().trim());

	if(respuestas.length < preguntas.length){
		Mostrar_Pregunta(respuestas.length);
		
	}else{
		process.exit();
	}
});

// Iniciar proceso
Mostrar_Pregunta(0);