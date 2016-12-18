const fs = require("fs");
	let texto = " utilizando el modulo FS"


	fs.writeFile("nombre-archivo.txt", texto, (err)=>{

		if(err){
			throw err;
		}
		else{
			console.log("archivo creado")
		}
		});