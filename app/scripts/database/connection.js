/**
 * FRAMEWORK EXPRESS DE Node.js
 * Realizado por Julian David MR
 */
var database = require('./database.json');
var mysql = require('mysql');

var connection = mysql.createConnection(database.local);

function conectar() {
	connection.connect(function (err) {
		if (!err) {
			console.log("Database conectada ...\n");
			return true;
		} else {
			console.log("Error al conectar database ... \n\n");
			return false;
		}
	});
}

/*
var cuenta = 'cuenta'; //Donde se almacenan los credenciales

//Listar todos las cuentas
app.get('/cuentas', function (req, res) {
	console.log("Consultando todas las cuentas.");
	permitir_todo(res);

	connection.query("SELECT * from " + cuenta + ";", function (err, rows, fields) {
		if (err) {
			res.status(100);
			res.send("Error al consultar las cuentas.");
		} else if (rows.length != 0) {
			res.status(200);
			res.json(rows);
		} else {
			res.status(100);
			res.send("No hay cuentas registradas.");
		}
	});
});


//Consultar un usuario por su id
app.get('/cuenta/:id', function (req, res) {
	permitir_todo(res);
	console.log("Consultando usuario por id");

	var data = {
		"error": 1,
		"usuarios": ""
	};

	var idCuenta = req.params.id;
	console.log("id: " + idCuenta);

	if (!!idCuenta) {
		connection.query("SELECT * from " + cuenta + " WHERE idCuenta=" + idCuenta, function (err, rows, fields) {
			if (rows) {
				data["error"] = 0;
				data["usuarios"] = rows[0];
				res.json(data);
			} else {
				data["usuarios"] = 'No usuarios Found..';
				res.status(100);
				res.json(data);
			}
		});
	} else {
		data["usuarios"] = "Por favor verifica los datos de entrada";
		res.status(500);
		res.json(data);
	}
});

/**Iniciar sesion:
 * Consultar un usuario por email y contrasenia
 * Retorna un json si con los datos de la persona siempre y cuando el usuario este
 * activado.
 
app.get('/usuarios/auth/:email/:pass', function (req, res) {
	permitir_todo(res);

	var email = req.params.email;
	var pass = req.params.pass;

	var data = {
		"error": 1,
		"usuarios": "Valor por defecto de Json no cambiado."
	};

	console.log("Iniciando sesión. Credenciales: " + email + " - " + pass);

	if (!!email && !!pass) {
		connection.query("SELECT * from " + cuenta + " WHERE NUsuario='" + email + "' && Contrasenia='" + pass + "';",
			function (err, rows, fields) {
				if (rows.length != 0) {
					console.log("Inicio sesion: " + rows);
					res.json(rows);
				} else {
					console.log("Error al iniciar sesion: " + rows);
					data["usuarios"] = "No se encontró un usuario con esas credenciales.";
					res.send(data);
				}
			});
	} else {
		data["usuarios"] = "Por favor verifica los datos";
		res.json(data);
	}
});

var persona = 'persona';

//Listar todos las personas
app.get('/personas', function (req, res) {
	console.log("Consultando todas las personas.");
	permitir_todo(res);

	connection.query("SELECT * from " + persona, function (err, rows, fields) {
		if (err) {
			res.status(100);
			res.send("Error al consultar personas.");
		} else if (rows.length != 0) {
			res.status(200);
			res.json(rows);
		} else {
			res.status(100);
			res.send("No hay personas registradas.");
		}
	});
});

app.post('/persona/insertar/:fk_idTipoDocumento/:NDocumento/:Nombres/:Apellidos/:Telefono/:Correo/:fk_idPrograma', function (req, res) {
	console.log("Entro al metodo de insertar persona");

	permitir_todo(res);
	//variables de persona
	var fk_idTipoDocumento = req.params.fk_idTipoDocumento;
	var NDocumento = req.params.NDocumento;
	var Nombres = req.params.Nombres;
	var Apellidos = req.params.Apellidos;
	var Telefono = req.params.Telefono;
	var Correo = req.params.Correo;
	var fk_idPrograma = req.params.fk_idPrograma;

	var Estado = 'T';

	var data = {
		"error": 1,
		"usuarios": ""
	};

	if (!!fk_idTipoDocumento && !!NDocumento && !!Nombres && !!Nombres && !!Apellidos && !!Telefono
		&& !!Correo && !!fk_idPrograma && !!Estado) {

		//Personas
		var insert_persona = "INSERT INTO " + persona + "(TDocumento,NDocumento,Nombres,Apellidos,Telefono,Correo,FK_idPrograma) VALUES(?,?,?,?,?,?,?)";
		connection.query(insert_persona, [fk_idTipoDocumento, NDocumento, Nombres, Apellidos, Telefono, Correo, fk_idPrograma], function (err, rows) {
			if (err) {
				data["usuarios"] = "Error Adding data, rollback aplicado." + err;
				console.log(data["usuarios"]);
				res.status(500);
				res.json(data);
				//Se sale
			} else {
				console.log("Se insertaron los datos de persona.");
			}
										
			//Si llega hasta acá es porque ingresó la persona. Procedemos a consultar el ID de esa persona.
			var sql_getPersona = "SELECT * from " + persona + " WHERE TDocumento='" + fk_idTipoDocumento + "' && NDocumento='" + NDocumento + "' && Nombres='" + Nombres + "' && Apellidos='" + Apellidos + "' && Telefono='" + Telefono + "' && Correo='" + Correo + "' && fk_idPrograma='" + fk_idPrograma + "';";
			console.log("SQL: " + sql_getPersona);
			connection.query(sql_getPersona, function (err, rows, fields) {
				if (err) {
					data["usuarios"] = "Error al realizar la consulta, " + err;
					console.log(data["usuarios"]);
					res.json(data);
					//Se sale
				} else if (rows.length != 0) {
					console.log("Filas consultadas: " + rows);
					res.json(rows);
				} else {
					console.log("Error al iniciar sesion: " + rows);
					data["usuarios"] = "No se encontró un usuario con esas credenciales.";
					res.json(data);
				}
			});
		});
	} else {
		data["usuarios"] = "Por favor, debes ingresar todos los datos requeridos correctamente.";
		var sep = '/';
		data["resultado"] = fk_idTipoDocumento + sep + NDocumento + sep + Nombres + sep + Nombres + sep + Apellidos + sep + Telefono + sep + Correo + sep + fk_idPrograma + sep + fk_idPersona + sep + Estado;
		console.log(data["usuarios"]);
		res.json(data);
	}
});


app.post('/persona/actualizar/:idPersona/:fk_idTipoDocumento/:NDocumento/:Nombres/:Apellidos/:Telefono/:Correo/:fk_idPrograma', function (req, res) {
	console.log("Entro al metodo de actualizar persona");
	//variables de persona
	var idPersona = req.params.idPersona;
	var fk_idTipoDocumento = req.params.fk_idTipoDocumento;
	var NDocumento = req.params.NDocumento;
	var Nombres = req.params.Nombres;
	var Apellidos = req.params.Apellidos;
	var Telefono = req.params.Telefono;
	var Correo = req.params.Correo;
	var fk_idPrograma = req.params.fk_idPrograma;

	if (!!fk_idTipoDocumento && !!NDocumento && !!Nombres && !!Nombres && !!Apellidos && !!Telefono
		&& !!Correo && !!fk_idPrograma) {

		//Personas
		var sql = "UPDATE " + persona + " SET TDocumento=?,NDocumento=?,Nombres=?,Apellidos=?,Telefono=?,Correo=?,FK_idPrograma=? WHERE idPersona=?";
		connection.query(sql, [fk_idTipoDocumento, NDocumento, Nombres, Apellidos, Telefono, Correo, fk_idPrograma, idPersona], function (err, rows) {
			if (err) {
				res.status(100);
				res.send("Error Adding data, rollback aplicado." + err);
			} else {
				console.log("Se actualizaron los datos de persona.");
			}
		});
	} else {
		res.status(100);
		res.send("Por favor, debes ingresar todos los datos requeridos correctamente.");
	}
});


//Ingresar usuario
app.post('/cuenta/insertar/:NUsuario/:Contrasenia/:FK_idRol/:FK_idPersona', function (req, res) {
	console.log("Entro al metodo de insertar persona");
	//variables de cuenta
	var NUsuario = req.params.NUsuario;
	var Contrasenia = req.params.Contrasenia;
	var FK_idRol = req.params.FK_idRol;
	var FK_idPersona = req.params.FK_idPersona;

	var Estado = 'T';

	var data = {
		"error": 1,
		"cuenta": ""
	};

	if (!!NUsuario && !!Contrasenia && !!FK_idRol && !!FK_idPersona && !!Estado) {
		var insert_persona = "INSERT INTO " + cuenta + "(NUsuario,Contrasenia,FK_idRol,FK_idPersona,Estado) VALUES(?,?,?,?,?,now())";
		connection.query(insert_persona, [NUsuario, Contrasenia, FK_idRol, FK_idPersona, Estado], function (err, rows) {
			if (err) {
				data["cuenta"] = "Error Adding data, rollback aplicado." + err;
				console.log(data["cuenta"]);
				res.status(500);
				res.json(data);
				//Se sale
			} else {
				console.log("Se insertaron los datos de persona.");
			}
										
			//Si llega hasta acá es porque ingresó la persona. Procedemos a consultar el ID de esa persona.
			var sql = "SELECT * from " + cuenta + " WHERE NUsuario='" + NUsuario + "' && Contrasenia='" + Contrasenia + "' && FK_idRol='" + FK_idRol + "' && FK_idPersona='" + FK_idPersona + "' && Estado='" + Estado + "';";
			console.log("SQL: " + sql);
			connection.query(sql, function (err, rows, fields) {
				if (err) {
					data["cuenta"] = "Error al realizar la consulta, " + err;
					console.log(data["cuenta"]);
					res.json(data);
					//Se sale
				} else if (rows.length != 0) {
					console.log("Filas consultadas: " + rows);
					res.json(rows);
				} else {
					console.log("Error al iniciar sesion: " + rows);
					data["cuenta"] = "No se encontró un usuario con esas credenciales.";
					res.json(data);
				}
			});
		});
	} else {
		data["usuarios"] = "Por favor, debes ingresar todos los datos requeridos correctamente.";
		console.log(data["usuarios"]);
		res.json(data);
	}
});

/**
		 *                              Programas en donde estudian
		 

//Listar todos los programas
app.get('/programas', function (req, res) {
	var data = {
		"error": 1,
		"programas": ""
	};

	connection.query("SELECT * from " + programa, function (err, rows, fields) {
		if (rows.length != 0) {
			data["error"] = 0;
			data["programas"] = rows;
			res.json(data);
		} else {
			data["programas"] = 'No programas Found..';
			res.json(data);
		}
	});
});



/**
 * 												Envios
 

//Listar todos las personas
var envio = "envios";

app.get('/envios', function (req, res) {
	console.log("Consultando todos los envios.");
	permitir_todo(res);

	connection.query("SELECT * from " + envio, function (err, rows, fields) {
		if (err) {
			res.status(100);
			res.send("Error al consultar envios.");
		} else if (rows) {
			if (rows)
				res.status(200);
			res.json(rows);
		} else {
			res.status(100);
			res.send("No hay envios registrados.");
		}
	});
});

app.get('/envios/:idUsuario', function (req, res) {
	console.log("Consultando todos los envios.");
	permitir_todo(res);

	connection.query("SELECT * from " + envio, function (err, rows, fields) {
		if (err) {
			res.status(100);
			res.send("Error al consultar envios.");
		} else if (rows.length != 0) {
			res.status(200);
			res.json(rows);
		} else {
			res.status(100);
			res.send("No hay envios registrados.");
		}
	});
});

var grupo = "grupos";

app.get('/grupos', function (req, res) {
	console.log("Consultando todos los grupos.");
	permitir_todo(res);

	connection.query("SELECT * from " + grupo, function (err, rows, fields) {
		if (err) {
			res.status(100);
			res.send("Error al consultar grupos.");
		} else if (rows) {
			res.status(200);
			res.json(rows);
		} else {
			res.status(100);
			res.send("No hay grupos registrados.");
		}
	});
});

//Ingresar grupo
app.post('/grupo/insertar/:NombreGrupo/:UserGrupo/:Contrasenia', function (req, res) {
	console.log("Entro al metodo de insertar grupo.");

	permitir_todo(res);

	var NombreGrupo = req.params.NombreGrupo;
	var Contrasenia = req.params.Contrasenia;
	var UserGrupo = req.params.UserGrupo;
	var FK_idRol = 2; //Rol de estudiante
	var EstadoGrupo = 'T';

	if (!!NombreGrupo && !!Contrasenia && !!UserGrupo && !!EstadoGrupo) {
		var sql = "INSERT INTO " + grupo + "(NombreGrupo,UserGrupo,Contrasenia,EstadoGrupo,FK_idRol,FechaInscGrupo) VALUES(?,?,?,?,?,now())";
		connection.query(sql, [NombreGrupo, UserGrupo, Contrasenia, EstadoGrupo, FK_idRol], function (err, rows) {
			if (err) {
				res.status(100);
				res.send("Error Adding data, rollback aplicado." + err);
			} else {
				console.log("Se insertaron los datos de persona.");
			}

			var sql = "SELECT * from " + grupo + " WHERE NombreGrupo='" + NombreGrupo + "' && Contrasenia='" + Contrasenia + "' && FK_idRol='" + FK_idRol + "' && EstadoGrupo='" + EstadoGrupo + "';";
			console.log("SQL: " + sql);
			connection.query(sql, function (err, rows, fields) {
				if (err) {
					res.status(100);
					res.send("Error al realizar la consulta, " + err);
				} else if (rows.length != 0) {
					console.log("Filas consultadas: " + rows);
					res.json(rows);
				} else {
					res.status(100);
					res.send("No se encontraron datos de " + grupo);
				}
			});
		});
	} else {
		res.status(404);
		res.send("Por favor, debes ingresar todos los datos requeridos correctamente.");
	}
});
 
//Ingresar integrantes de grupo
var integrantes_grupo = "integrantesgrupo";

app.post('/grupo/integrantes/insertar/:FK_idGrupo/:FK_idCompetencia/:FK_idParticipacion/:FK_idPersona?', function (req, res) {
	console.log("Entro al metodo de insertar integrantes de grupo.");

	permitir_todo(res);

	var FK_idGrupo = req.params.FK_idGrupo;
	var FK_idCompetencia = req.params.FK_idCompetencia;
	var FK_idParticipacion = req.params.FK_idParticipacion;
	var FK_idPersona = req.params.FK_idPersona;
	var Estado = 'T';

	m(req.params);

	if (!!FK_idGrupo && !!FK_idCompetencia && !!Estado && !!FK_idParticipacion && !!FK_idPersona) {

		var IDsPersonas = FK_idPersona;
		m("- " + IDsPersonas);
		var IDs = IDsPersonas.split(';');

		var sql = "";

		for (var i = 0; i < IDs.length; i++) {
			var idPersona = IDs[i];
			m("* " + idPersona);
			sql += "INSERT INTO " + integrantes_grupo + "(FK_idPersona,FK_idGrupo,FK_idCompetencia,FK_idParticipacion, Estado) VALUES(" + idPersona + "," + FK_idGrupo + "," + FK_idCompetencia + "," + FK_idParticipacion + "," + Estado + ");";
		}

		m("SQL concat: " + sql.toString());
		res.status(200);
		res.send(" ++ " + sql);

		connection.query(sql, function (err, rows, fields) {
			if (err) {
				res.status(100);
				res.send("Error al realizar la consulta, " + err);
			} else if (rows.length != 0) {
				console.log("Filas consultadas: " + rows);
				res.json(rows);
			} else {
				res.status(100);
				res.send("No se encontraron datos de " + grupo);
			}
		});
	} else {
		res.status(404);
		res.send("Por favor, debes ingresar todos los datos requeridos correctamente.");
	}
	
	/*
		connection.query(sql, function (err, rows) {
			if (err) {
				res.status(100);
				res.send("Error Adding data, rollback aplicado." + err);
			} else {
				console.log("Se insertaron los datos de persona.");
			}

			var sql = "SELECT * from " + grupo + " WHERE FK_idGrupo='" + FK_idGrupo + "' && FK_idCompetencia='" + FK_idCompetencia + "' && FK_idRol='" + FK_idRol + "' && Estado='" + Estado + "';";
			console.log("SQL: " + sql);
			connection.query(sql, function (err, rows, fields) {
				if (err) {
					res.status(100);
					res.send("Error al realizar la consulta, " + err);
				} else if (rows.length != 0) {
					console.log("Filas consultadas: " + rows);
					res.json(rows);
				} else {
					res.status(100);
					res.send("No se encontraron datos de " + grupo);
				}
			});
		});
	} else {
		res.status(404);
		res.send("Por favor, debes ingresar todos los datos requeridos correctamente.");
	}
	
});
*/