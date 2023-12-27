
let palabra = 'JavaScript';
document.write('La palabra es: ', palabra);
document.write('<br><br>');

// Tamaño de texto
document.write('Cantidad de letras: ', palabra.length);
document.write('<br><br>');

// Ver caracteres especifica en un texto
document.write('Primaras 4 letras: ', palabra.slice(0, 4));
document.write('<br><br>');

// Ver caracteres especifica en un texto
document.write('Primaras 4 letras: ', palabra.substring(0, 4));
document.write('<br><br>');

// Cambiar valores en un texto
let saludo = 'Hola Mundo';
saludo = saludo.replace('Hola', 'Adios');

document.write(saludo);
document.write('<br><br>');

// Tamaño de textos
document.write('En mayusculas: ', palabra.toUpperCase());
document.write('<br><br>');

document.write('En minusculas: ', palabra.toLowerCase());
document.write('<br><br>');

// Concatenacion

let palabra2 = 'Curso de ';
document.write('Concatenar textos: ', palabra2.concat(palabra));
document.write('<br><br>');

// Acortar espacios

let palabra3 = '   Hola   ';
document.write(palabra3.trimStart());
document.write('<br><br>');

// Cortar cantidad de caracteres
document.write(palabra.split('Script'));