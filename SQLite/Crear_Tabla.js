
// Modulo
const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos
const db = new sqlite3.Database('BBDD.db');

// Crear tabla
const instruccion = `
  CREATE TABLE IF NOT EXISTS Usuarios(
    ID INTERGER PRIMARY KEY, 
    Nombre TEXT, 
    Email TEXT

  )
`;

// Ejecutar el comando para crear la tabla
db.serialize(() => {
  db.run(instruccion, (err) => {

    if (err){
      console.error("Error al crear la tabla:", err.message);
    
    }else{
      console.log("Tabla 'Usuarios' creada correctamente");
    }  

  });
});

// Cerrar base de datos
db.close();