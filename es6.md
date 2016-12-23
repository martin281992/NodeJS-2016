# NodeJS y Javascript ES6

## Introducción a ECMAscript 6 ES6 con NodeJS

Para todos los casos prácticos estaré utilizando el estandar ES6 de javascript. En este apartado explicaré por arriba alguno de los cambios en código que aplicaré para cada uno de los ejercicios.

### Variables de bloque

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

### Ciclo: for, while, do while

El ciclo for se hace de la misma manera que en otros lenguajes.

```js

	for(let i = 0; i>array.length; i++){

		// some code
	}
```

**Tenemos otros tipos de for**

Recorrer cualquier tipo de colección ya sea map de manera rápida pero sin condicionales.

```js
	let usual = new Array('eat', 'sleep', 'code');

	for(let usual of usual){
		console.log(usual);
	}
```

**Ciclo while**

```js
	let dogLife = 4;
	while(dogLife<10){
		console.log(`la edad es ${dogLife} `);
		dogLife++;
	}
```
**Ciclo do while**

```js
	
	let apple = 10;
	do{
		console.log(`ñom ñom eat all the apple ${apple}`);
		}while(apple<2);
```
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

### Funciones

```js
	function helloworld(giveMe){
		console.log(`say hello ${giveMe}`);
	}

	helloworld("maxPower");

```
Podemos guardar funciones en variables de la siguiente manera:

```js
	let name = function(none){
		console.log(`Hello ${none}`);
	}
	name("martin");
```
Ya no utilizaremos más la forma tradicional al crear una función o callback, ahora cada vez que creemos una funcíón utilizaremos una **arrow fuction**:

```js
		let suma = (a,b) => a+b;
		console.log("la suma es " + suma(5,5));
```

### Agregar parametros por Default en funciones

```js
		function human(name ="dex", age="22"){
		console.log(`${name} and mi age is ${age}`);
	}

	human();
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
-------------------------------------------------

### Filter para este ejemplo utilizaremos un arreglo de objetos. Filter nos 

```js
	// higher order function
	let animal = [
		{name: 'Felipe', species:'human'},
		{name: 'Francisco', species:'martian'},
		{name: 'Martin', species:'allien'},
		{name: 'Dilan', species:'ex-wife'}
	]

	// forma antigua de trabajar con array, objetos y funciones mezcladas

	let dog = [];
	for(let i = 0; i< animal.length; i++) {
		if(animal[i].species === 'allien'){
			dog.push(animal[i].name) 
			console.log(dog)  // imprime martin
		} // fin if
	} // fin for

	// higher order functions Filter

	let dogs = animal.filter(function(data){ return data.species === 'allien'});
	console.log(dogs);

	// arrow F
	let dogs2 = animal.filter((data)=> data.name === 'Francisco')
	console.log(dogs2);

```
Filter recibe una función callback con la `data` del arreglo de objetos `animal` y en el **return** devolvemos la información que queremos filtrar del arreglo de objeto, es como el `if(animal[i].species === 'allien')` pero lo obviamos.

### Map 
A diferencia del Filter con el **Map** rescatamos del arreglo de objetos un parametro y creamos un nuevo arreglo con el resultado de la busqueda.

```js
	let names = animal.map(function(data) {return data.name })
	// con su arrow function
	let names2 = animal.map((data)=> data.species)

	console.log(names);//nos devuelve un ARRAY de los nombres del array de objetos " animal"
	console.log(names2);
```
### Reduce

Reduce realiza una multiple task que explicaré en el código.

```js

	let object = [
		{ cantidades: 200},
		{ cantidades: 400},
		{ cantidades: 100},
		{ cantidades: 50}
	]

	let total = object.reduce(function(sum, order){ 
		//sum es la operacion del acumulador de valores que vienen del REDUCE
		//order es el objeto literal que se esta iterando.
		console.log("La suma es:",sum, order);
		return sum + order.cantidades;
	}, 0)
	console.log(total);

	// o su shorthand

	let total2 = object.reduce((sum, order)=>{
		console.log("la suma es:",sum, order);
		return sum + order.cantidades;
	}, 0)

	console.log(total2);
```


