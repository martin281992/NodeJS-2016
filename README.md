# NodeJS 2016 practicas y apuntes
 
**Antes de comenzar con node te recomiendo repasar los siguientes contenidos** !important:

1. **[JavaScript ES6](https://github.com/martin281992/NodeJS-2016/blob/master/es6.md  "click")**

**Te dejo tambien las dependencias y framework más populares con nodeJS** !important

1. **[Express](https://github.com/martin281992/NodeJS-2016/blob/master/es6.md "click")**
2. **[socket.io](https://git-scm.com/downloads "click")**

# Primeros pasos con nodeJS

## Instalación

Lo primero que tenemos que hacer es instalar node desde la página oficial **[NodeJS web Oficial](https://nodejs.org/es/ "click")**.

Instala la versión estable de nodeJS, cuando descargamos nodeJS estarás instalando enseguida NPM node package manager o gestor de paquetes de node, este nos servirá para instalar X cotenido que decidamos utilizar con node.

Si trabajas en window te recomiendo utilizar Git Bash para emular los comandos linux, este nos proveerá de una consola.

**[Descargar git bash](https://git-scm.com/downloads "click")**

Una vez instalado git bash utilizamos los siguientes comandos para ver las versiones:

```	
	node --version
	npm  --version
````

# Comenzar un proyecto en nodeJS.

Cuando queremos comenzar un proyecto en nodeJS tenemos que crear el archivo **package.json** donde almacenaremos las dependencias que nuestra aplicación necesitará para funcionar como tambien las dependencias de desarrollo y librerias.

Para crear el package.json tenemos que inicializar nuestro proyecto con:

` npm init`

Al digitar el código anterior te preguntará una serie de cosas del proyecto, al completar todo los pasos se creará automaticamente un archivo package.json.

Una de las preguntas será el nombre del **entry point**, este será el archivo desde donde se inicializará la app. ejemplo: **app.js**


Cada una de las dependencias que instalemos para el proyecto quedarán escritas en nuestro package.json, este archivo se puede copiar para otro proyecto con las dependencias pertinentes. Ejemplo de instalación de cualquier dependencia:

`npm install express --save`

Se creará automaticamente la carpeta **node_modules** con la dependencia que instalamos, en este caso express.

Si queremos instalar las dependencias en otro proyecto copiamos el archivo package.json a la carpeta de nuestro nuevo proyecto y por consola(ubicados en la carpeta nueva) digitamos lo siguiente:

`npm install`

Con esto instalaremos todas las dependencias que tengamos en el package.json y nos creará nuestra carpeta respectiva **node_modules** con las dependencias listas para utilizar.

## Modulo FileSystem

### Crear un archivo y escribir contenido en el

Primer paso será requerir el modulo fileSystem para poder utilizarlo con **`require`** y escribiremos sobre el archivo creado con `writeFile`:

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

### Creación de carpeta y validación de su existencia.

El metodo `mkdir` es el que nos creará la carpeta, el metodo access nos permite si podemos acceder a un directorio, carpeta o archivo. 
Ambos reciben una callback para ver si tenemos error o no y cómo proceder.

```js

		var fs = require("fs");
		fs.access("test", (err)=> {
			if(err){ // si no existe la carpeta la crea
			fs.mkdir("test", (err)=> {
				if(err){
				throw err;
					}else{
					console.log("la carpeta fue creada");
						}
				})
			}else{ // si existe la podemos acceder
				console.log("la carpeta ya existe")

			}
		})


```

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

### Stream 

Un stream es un flujo de información o un flujo de datos, podemos leer un stream con el siguiente código:

```js
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

```


