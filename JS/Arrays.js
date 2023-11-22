
// Vectores y matrices

let vector = [1, 2, 3, 4, 5];
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let vector_moderno = new Array(3);
vector_moderno[0] = "Lisa";
vector_moderno[1] = "Perla";

let matriz_moderna = new Array(3);

for(let i=0; i<3; i++){
	matriz_moderna[i] = new Array(3);
}

// Mostrar datos

console.log("Vector:", vector);
console.log("Vector elemento:", vector[2]);
console.log("Matriz:", matriz);
console.log("Matriz elemento:", matriz[1][1]);
console.log("Vector moderno:", vector_moderno);
console.log("Matriz moderna:", matriz_moderna);

// Recorrer vectores

let paises = ["Chile", "Mexico", "Brasil"];

for(let i=0; i<paises.length; i++){
	console.log(paises[i]);

	if(paises[i] == "Chile"){
		console.log("Este pais es picante");
	}
}

// Recorrer matrices

for(let f=0; f<matriz.length; f++){
	for(let c=0; c<matriz[f].length; c++){
		console.log(matriz[f][c]);
	}
}

// Metodos

let frutas = ["Limon", "Piña"];

// Ingresar
frutas.push("Manzana");
console.log(frutas);

// Borrar el ultimo elemento 
frutas.pop();
console.log(frutas);

// Borrar el primer elemento
frutas.shift();
console.log(frutas);

// Agregar elemento de primero
frutas.unshift("Sandia");
console.log(frutas);

// Filtro

let frutas_con_a = frutas.filter(fruta => fruta.includes("a"));
console.log(frutas_con_a);

// Concatenar

let concatenacion = frutas.concat(frutas_con_a);
console.log(concatenacion);

// Revertir

concatenacion.reverse();
console.log(concatenacion);

// Ordenar

concatenacion.sort();
console.log(concatenacion)