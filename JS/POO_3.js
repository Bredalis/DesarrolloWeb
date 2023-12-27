
// Clases
class persona{

	// Atributos
	nombre = 'Lisa';
	apellido = 'Bastardo';
	direccion = 'Ave. Manuela Diez';
	email = 'lisa@gmail.com';

	// Metodos
	trabajar(){
		return 'Trabaja en la planta nuclear';
	}

	estudiar(){
		return 'Escuela primaria - Manuela Diez Jimenez';
	}
}

// Objeto para clase
const lisa = new persona();

document.write(`Nombre: ${lisa.nombre} ${lisa.apellido}`);
document.write('<br>');
document.write(`Trabajo: ${lisa.trabajar()}`);
document.write('<br><br><br>');

const alfredo = new persona();

document.write(`Nombre: Alfredo ${alfredo.apellido}`);
document.write('<br>');
document.write(`Estudia: ${alfredo.estudiar()}`);