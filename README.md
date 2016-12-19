# NodeJS 2016 practicas y apuntes

## Primeros pasos con nodeJS

### Instalación

Lo primero que tenemos que hacer es instalar node desde la página oficial **[NodeJS web Oficial](https://nodejs.org/es/ "click")**.

Instala la versión estable de nodeJS, cuando descargamos nodeJS estarás instalando enseguida NPM node package manager o gestor de paquetes de node, este nos servirá para instalar X cotenido que decidamos utilizar con node.

Si trabajas en window te recomiendo utilizar Git Bash para emular los comandos linux, este nos proveerá de una consola.

**[Descargar git bash](https://git-scm.com/downloads "click")**

Una vez instalado git bash utilizamos los siguientes comandos para ver las versiones:

```	
	node --version
	npm  --version
````

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

### Leer archivo JSON de manera sincrona.

En node debemos aprender el concepto de lo que es sincrono y asincrono, lo veremos más adelante.
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

		const fs = require("fs");
		contenido = fs.readFileSync("archivo/config.json", "UTF-8");

		console.log(contenido);

		let config = JSON.parse(contenido);

		console.log(config.nombre_usuario);

		console.log(config.nacionalidad);

```

### Leer directorio asincronamente

Cuando utilizamos el readdir lo podemos hacer de dos maneras sincronamente `readdirSync` o  asincronamente  `readdir` con este ejemplo entenderemos más o menos el funcionamiento de node, en este caso al utilizar `readdir` ejecutará la lectura del directorio y se lanzará la respuesta cuando termine de ejecutarse la callback `(err, archivos) => {...}` a continuación de la lectura estaremos enviando un mensaje `console.log("mensaje mensaje")` este se lanzará primero y no en **cascada** como pensamos... eso es por el funcionamiento asincrono que nos provee nodeJS.

```js

		const  fs = require("fs");

		fs.readdir("./", (err, archivos)=> {
			if(err){
				throw err;

			}else{
				console.log(archivos)
			}
		})

		console.log("mensaje mensaje")
```


### Borrar archivo

Para borrar archivos debemos requerir el modulo fileSystem, utilizar **unlink** para borrar archivos y despues le pasamos una arrow function para ver si tenemos un error.

```js

		const fs = require("fs");

		fs.unlink("test/text.txt", (err)=> {

			if(err){
				throw err;
			}
			else{
				console.log("archivo borrado");
			}
		})
```