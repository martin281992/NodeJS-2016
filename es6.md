# NodeJS y Javascript ES6

## Introducción a ECMAscript 6 ES6 con NodeJS

Para todos los casos prácticos estaré utilizando el estandar ES6 de javascript. En este apartado explicaré por arriba alguno de los cambios en código que aplicaré para cada uno de los ejercicios.

### Variables

Ya dejamos de lado la palabra reservada `var` ahora para las variables utilizaremos la que indica el estandar `Let` y `const`, donde **const** se aplicará a variables que su valor no se modificará, mientras que **let** la utilizaremos para las variables normales.

### Array o listas ordenadas
	
Maneras de crear array en javascript

` let funfun = new Array('cat, 'dog', 'me');`

`let fun = [];`


Ingresar valores a nuestro array

`funfun.push('lion');`

Eliminar último elemento del array

`funfun.pop();`

Ordenar alfabetica los elementos del array
	
`funfun.sort();`

Ver la cantidad de elementos que tenemos en nuestro array

`console.log(funfun.length)`

### Re-asignar valores a nuestros arrays



### Set o conjuntos

Un conjunto es una colección donde almacenamos valores, esos valores pueden iterarse. Los valores de un conjunto son valores únicos.

```js

	 let noFun = new Set();
	//agregar valores al conjunto.
	 noFun.add("jesus");
	 nuFun.add("Crist");

```
Podemos consultar valores dentro de un conjunto con:

`console.log(noFun.has("jesus"));`

Esto nos retornará un valor **true** porque existe dentro de nuestro conjunto. 

Podemos ver la cantidad de elementos que tiene nuestro conjunto :

`console.log(noFun.size)`

Eliminar elementos de nuestro conjunto:

noFun.delete("jesus");

Los conjuntos son parecidos a los maps porque son colecciones.

### Arrow Fuction 

Ya no utilizaremos más la forma tradicional al crear una función o callback, ahora cada vez que creemos una funcíón utilizaremos una **arrow fuction**:

```js
		let suma = (a,b) => a+b;
		console.log("la suma es " + suma(5,5));

```

### N valores como parametros

Para agregar una serie de valores podemos utilizar el siguiente código:

```js
		let valores = (...values) => 

```

Los **...** indican una serie de valores que se podrían ingresar.

### Clases en ES6

Las clases en JS son como en cualquier otro lenguaje de programación donde se crea la clase y seguido se instancian con su constructor.

```js

	class gatito{

	constructor(nombre, raza){
		this.nombre = nombre;
		this.raza = raza;
	}}

	let gato = new gatito('mao', 'fox');

	console.log(`el nombre del gatito es: ${gato.nombre} y es de raza ${gato.raza}`);

``` 

### Exportar modulos en ES6

Creamos un archivo **nombre.js** y escribimos el siguiente código de ejemplo:

```js
		let fun = ()=>{
		console.log("Hola word");
	}

		//exportamos el modulo

		module.exports.archivo = fun;
```

Creamos un segundo archivo requerir.js y requerimos el modulo anterior:

```js
		requerir = require("./nombre.js");

		requerir.archivo(); // llamamos a la funcion del modulo que requerimos.
```

### Promesas

Las promesas pueden tener 3 estados: resuelto, inconcluso o incorrecto. Es el resultado de un proceso o tarea mas adelante ahondaré más con ejemplos de promesas.

```
	npm init   // para tener el pachage.json
	npm install promise --save
```
	
Para utilizar las promesas requerimos la librería de **node_modules**

```js
	'use strict';
	const Promise = require("promise");

	// creamos un objeto promesa

	promesa = new Promise(

		(resolve, reject)=>{

			// some code

			if(){
				resolve("todo OK");
			}else{
				reject("error")
			}
		}
 

		) //fin promesa

	promesa.then((resultado)=>
		{
			console.log(resultado);
		}, 
			(err)=>{
					console.log(err)
					}
		)
		.catch((err)=>
			{
				console.log(err);
			})

	
```
Las promesas nos devuelven un estado, con eso podemos jugar para ir utilizando nuestros códigos y tener una mejor comprensión de sus estados, errores etc.

### Metodos ES6 Map(), Filter(), Reduce()
