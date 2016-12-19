var fs = require("fs");

var contenido = fs.readFileSync("archivo/config.json", "UTF-8");

console.log(contenido);

var config = JSON.parse(contenido);

console.log(config.nombre_usuario);
console.log(config.nacionalidad);
