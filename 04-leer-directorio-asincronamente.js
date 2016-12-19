	const  fs = require("fs");

		fs.readdir("./", (err, archivos)=> {
			if(err){
				throw err;

			}else{
				console.log(archivos)
			}
		})

		console.log("mensaje mensaje");