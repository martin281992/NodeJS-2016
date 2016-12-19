const fs = require("fs");

let total = "",
stream = fs.createReadStream("archivos/archivo.txt");


stream.on("data", (segmento)=>{
	console.log(segmento.length);
	total += segmento;

	stream.pause();
	stream.resume();
})


stream.on("end", ()=>{
	console.log("El tamaño total del archivo es: " + total.length);

})