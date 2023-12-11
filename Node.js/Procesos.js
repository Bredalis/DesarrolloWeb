
function Parametro(p){

	var index = process.argv.indexOf(p);
	return process.argv[index + 1];
}

var nombre = Parametro("--nombre");
var edad = Parametro("--edad");

console.log(`Tu nombre es ${nombre}, y tienes ${edad} años`);