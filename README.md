# NodeJS 2016 practicas y apuntes

## Modulo FileSystem

### Crear un archivo

Primer paso será requerir el modulo fileSystem para poder utilizarlo con **`require`**.

```js
		const fs = require("fs");
		let texto = " utilizando el modulo FS"

		fs.writeFile("nombre-archivo.txt", texto, (err)=>{
			if(err){
				throw err;
			}
			else{
				console.log("archivo creado")
			}
			})
```

En `fs.writeFile` le pasamos el nombre del archivo a crear, el texto que incluirá y una función.

### Abrir un archivo y leer el contenido

Para abrir un archivo existente utilizamos del modulo fileSystem `appendFile` con la ruta del archivo, el texto que contendrá  y una función

```js

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
```
Para leer el archivo utilizamos del modulo fileSystem `readFile` con 3 parametros: el archivo en cuestión, el formato de codificación UTF-8 y una función, si el archivo no existe lo crea.

### Leer archivo JSON de manera sincrona, en node debemos aprender el concepto de lo que es sincrono y asincrono, lo veremos más adelante.

Veremos como abriremos un archivo JSON lo parsearemos y rescataremos alguno de sus valores para enseñarlos por consola.

El archivo será el siguiente `archivo.json`
```
	{
	"nombre": "martin",
	"apellido": "berkhoff",
	"nombre_usuario": "comunidad_node_js",
	"nacionalidad": "chileno"
	}
```
Ahora con el siguiente código leeremos el archivo y rescataremos el contenido de el

```js

		let fs = require("fs"),
		contenido = fs.readFileSync("archivo/config.json", "UTF-8");

		console.log(contenido);

		let config = JSON.parse(contenido);

		console.log(config.nombre_usuario);

		console.log(config.nacionalidad);
´´´