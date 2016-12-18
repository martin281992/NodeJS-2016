		const fs = require("fs");
		let nuevoTexto = " \n curso por diseño diseño";

		fs.appendFile("./archivo", nuevoTexto, (err)=> {
			if(err){
				throw err;
			}
			else{
				console.log("el texto fue añadido")
				fs.readFile("archivo", "UTF-8", (error, contenido)=> {
					if(err){
							throw err;
							}
					else{
						console.log("contenido: " + contenido);
						}

					})
			}// fin else
		}) // fin appendFile