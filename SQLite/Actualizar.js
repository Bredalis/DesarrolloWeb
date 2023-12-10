
// Modulo
const sqlite3 = require('sqlite3').verbose();

// Conectar a la bbdd
const db = new sqlite3.Database('BBDD.db');

// Actualizar datos
const instruccion = ` 
	UPDATE Usuarios SET Nombre = 'Bienvenida' WHERE ID = 1	
`;

// Ejecucion
db.run(instruccion);

// Cerrar bbdd
db.close();