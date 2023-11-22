
var confirmacion = confirm("¿Te llamas Jonathan Castro?");

const año_actual = new Date().getFullYear();
const años = 2042 - año_actual;

if(confirmacion == true){
	console.log("En " + años + " años nos vamos a casar");
}else{
	console.log("No nos casaremos");
}