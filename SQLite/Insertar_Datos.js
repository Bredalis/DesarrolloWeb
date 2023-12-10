
// Modulo
const sqlite3 = require('sqlite3').verbose();

// Conectar a la bbdd
const db = new sqlite3.Database('BBDD.db');

// Insertar datos
const instruccion = `

	INSERT INTO Usuarios(Nombre, Email)
	VALUES(1, "Yulissa", "YulissaBastardo@gmail.com")
`;

// Ejecutar
db.serialize(() => {
	db.run(instruccion, (err) => {

		if (err){
			console.error("Error al insertar datos:", err.message);
		}else{
			console.log("Datos insertados correctamente en la tabla 'Usuarios'");
		}

	});
});

// Cerrar bbdd
db.close();