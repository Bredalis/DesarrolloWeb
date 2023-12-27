
// Modulo
const sqlite3 = require('sqlite3').verbose();

// Conectar a la bbdd
const db = new sqlite3.Database('BBDD.db');

// Borrar datos
const instruccion = `DELETE FROM Usuarios`;

// Ejecucion
db.run(instruccion);

// Cerrar bbdd
db.close();