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

		var nuevoTexto = " \n curso por diseño diseño";

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