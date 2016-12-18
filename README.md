# NodeJS 2016 practicas y apuntes

## Modulo FileSystem

### Crear un archivo

Primer paso será requerir el modulo fileSystem para poder utilizarlo.

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
