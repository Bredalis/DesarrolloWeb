
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

function cambiarTexto() {
  var elemento = document.getElementById("parrafo");
  elemento.innerHTML = "¡El texto ha sido cambiado con JavaScript!";
}
