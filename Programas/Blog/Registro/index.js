
// Datos de usuario
const apodo = document.getElementById('input-1').value;
const correo_electronico = document.getElementById('input-2').value;
const contraseña = document.getElementById('contraseña').value;

function DatosDeUsuario(){

	// Modulo
	const sqlite3 = require('sqlite3').verbose();
	const db = new sqlite3.Database('C:/Users/Angelica Gerrero/Desktop/LenguajesDeProgramacion/BBDD/Programas/ProgramasJS/Registro_De_Usuario.db');

	// Guardar datos
	const instruccion = f`
		INSERT INTO Registro_De_Usuario(Apodo, Correo_Electronico, Contraseña)
		VALUES(${apodo}, ${correo_electronico}, ${contraseña})
	`;

	db.serialize(() => {
		db.run(instruccion, (err) => {

			if (err){
				console.error("Hubo un error:", err.message);
			}

			if (contraseña != "J$9mK#2sP&8wA!"){
				alert("Contraseña incorrecta. No puedes entrar");
			}

		});
	});

	// Cerrar bbdd
	db.close();
}