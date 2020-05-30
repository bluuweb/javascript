# Fundamentos
Veamos los fundamentos de Javascript para trabajar con Vue, React, Angual, etc.

## var vs let vs const

```js
var edad = 10
var edad = 20
console.log(edad) // 20

let edad = 10
let edad = 20
console.log(edad) // error

// solución
let edad = 10
edad = 20
console.log(edad) // 20
```

```js
var edad = 10
if(true){
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20

let edad = 10
    if(true){
        let edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10
```

```js
const edad = 10
const edad = 20 // SyntaxError

const edad = 10
edad = 20 // Error: "edad" is read-only

const edad = 10
    if(true){
        const edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10
```

```js
var edades = [10,20,30]
var edades = [10,20,30,40]
console.log(edades)

let edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)

const edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)

const edades = [10,20,30]
edades.push(40)
console.log(edades)

const persona = {
  nombre: 'juanito',
  edad: 20
}

persona.edad = 21
persona.pais = 'México'

console.log(persona)
```

## Funciones

```js
function sumar (num1, num2) {
  console.log(num1 + num2)
}
sumar(10, 20)

const sumarDos = (num1, num2) => {
  console.log(num1 + num2)
}
sumarDos(10, 50)

const sumarDos = num1 => {
  console.log(num1)
}
sumarDos(10)

const sumarDos = num1 => {
  return num1
}
console.log(sumarDos(10))

const sumarDos = num1 => num1
console.log(sumarDos(10))

const sumar = (num1, num2) => {
  return 'la suma es: ' + (num1 + num2)
}
let resultado = sumar(10, 20)
console.log(resultado)

const sumar = (num1, num2) => (
  'la suma es: ' + (num1 + num2)
)
let resultado = sumar(10, 20)
console.log(resultado)

const sumar = (num1 = 10) => (
  'la suma es: ' + (num1 + 20)
)
let resultado = sumar()
console.log(resultado)
```

## Template String (alt + 96)
```js
// template string
const numero = (num) => {
  return 'el numero es: ' + num 
}
const resultado = numero(10)
console.log(resultado) 

const numero = (num) => {
  return `el numero es: ${num}` 
}
const resultado = numero(10)
console.log(resultado)

const numero = (num1, num2) => {
  return `el numero es: ${num1 + num2}` 
}
const resultado = numero(10,20)
console.log(resultado)

```

## Objetos
```js
// objetos
const mascota = {
  nombre: 'Tom',
  edad: 5,
  tipo: 'gato'
}
mascota.raza = 'peludo'
console.log(mascota)
console.log(mascota.raza)
```

## Destructuring Objects
[https://wesbos.com/destructuring-objects](https://wesbos.com/destructuring-objects)

```js
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
}

console.log(mascota.razas[1])
console.log(mascota.nombre)

const nombreMascota = mascota.nombre
console.log(nombreMascota)

const {nombre} = mascota
console.log(nombre)
```

Prácticas:
```js
// objetos
const web = {
  nombre: 'bluuweb',
  links: {
    enlace: 'www.bluuweb.cl'
  },
  redesSociales:{
    youtube:{
      enlace: 'youtube.com/bluuweb',
      nombre: 'bluuweb yt'
    },
    facebook:{
      enlace: 'facebook.com/bluuweb',
      nombre: 'bluuweb fb'
    }
  }
}

const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)
```

