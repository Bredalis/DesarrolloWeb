
// Clases

class Persona{

	// Atributos
	nombre = "Lisa";
	apellido = "Bastardo";
	direccion = "Ave. Manuela Diez";
	email = "lisa@gmail.com";

	// Metodos
	trabajar(){
		return "Trabaja en la planta nuclear";
	}

	estudiar(){
		return "Escuela primaria - Manuela Diez Jimenez";
	}
}

// Objeto para clase
const lisa = new Persona();

document.write(`Nombre: ${lisa.nombre} ${lisa.apellido}`);
document.write("<br>");
document.write(`Trabajo: ${lisa.trabajar()}`);
document.write("<br><br><br>");

const alfredo = new Persona();

document.write(`Nombre: Alfredo ${alfredo.apellido}`);
document.write("<br>");
document.write(`Estudia: ${alfredo.estudiar()}`);