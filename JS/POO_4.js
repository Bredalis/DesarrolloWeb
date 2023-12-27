
const fecha_actual = new Date();

document.write(`Fecha actual: ${fecha_actual}`);
document.write('<br>');

let fecha = new Date();
document.write(`Hoy es: ${fecha.getDate()}`);
document.write('<br>');
document.write(`El mes es: ${fecha.getMonth() + 1}`);
document.write('<br>');
document.write(`El año es: ${fecha.getFullYear()}`);
document.write('<br>');
document.write(`La hora es: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
document.write('<br>');