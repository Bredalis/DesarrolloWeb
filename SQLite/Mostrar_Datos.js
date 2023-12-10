
// Modulo
const sqlite3 = require('sqlite3').verbose();

// Conectar a la bbdd
const db = new sqlite3.Database('BBDD.db');

// Mostrar datos
const instruccion = ` 
	SELECT * FROM Usuarios
`;

// Ejecucion
db.all(instruccion, (err, rows) => {
	if (err){
		console.error("Hubo un error:", err.message);
		return;
	}

	// Resultado
	console.log("Datos:", rows);
});

// Cerrar bbdd
db.close();