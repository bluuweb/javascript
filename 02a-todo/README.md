# DOM - ToDo
Aplicaremos lo aprendido en nuestra sección DOM.

## Apoya el Directo :)
::: tip Suscríbete al canal de Youtube
¡GRATIS! 😍 Solo tienes que suscribirte para apoyar el canal, [click aquí](https://bit.ly/3kLYAqr)
:::

::: tip CURSO EN UDEMY OFERTA!
Aprende desde cero a trabajar con <b>Vue.js y Firebase</b> aquí: [http://curso-vue-js-udemy.bluuweb.cl](http://curso-vue-js-udemy.bluuweb.cl)
<b>Nos vemos en clases!</b>
:::

::: tip CURSO EN UDEMY OFERTA!
Aprende desde cero a trabajar con <b>React.js y Firebase</b> aquí: [http://curso-react-js-udemy.bluuweb.cl](http://curso-react-js-udemy.bluuweb.cl)
<b>Nos vemos en clases!</b>
:::

::: tip CURSO EN UDEMY OFERTA!
Aprende desde cero a trabajar con <b>Bootstrap 4!</b> aquí: [http://curso-bootstrap-4-udemy.bluuweb.cl](http://curso-bootstrap-4-udemy.bluuweb.cl)
<b>Nos vemos en clases!</b>
:::

## Preguntas y Respuestas
- [https://discord.gg/xSceUPh](https://discord.gg/xSceUPh)

## ¿Qué vamos a realizar?
- [https://todo-dom-bluuweb.netlify.app/](https://todo-dom-bluuweb.netlify.app/)

## Requisitos
- [Curso de JavaScript Playlist](https://bit.ly/2UjotTw)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z4TuS0HEJP8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recursos
- [Bootstrap](https://getbootstrap.com/)
- [CDN Font Awesome](https://cdnjs.com/libraries/font-awesome)
- [icons/check-circle](https://fontawesome.com/icons/check-circle?style=solid)
- [icons/minus-circle](https://fontawesome.com/icons/minus-circle?style=solid)
- [icons/undo-alt](https://fontawesome.com/icons/undo-alt?style=solid)
- [DOMContentLoaded](https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded)
- [classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList)
- [HTMLElement/style](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/style)
- [text-decoration](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text-decoration)
- [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [JSON/parse](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/parse)
- [JSON/stringify](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify)
- [Tutorial LocalStorage bluuweb 🙌](https://www.youtube.com/watch?v=7hR7oTpDukc)

## ToDo Object
Utilizaremos una colección de objetos. (también puedes utilizar un array 🐱‍👤)
```js
// Objeto con index
// Colecciones de datos ordenados por un valor de índice
let todos = {
  1: { nombre: "item 1" },
  2: { nombre: "item 2" },
};

// Recorrer objetos
for (const key in todos) {
  if (todos.hasOwnProperty(key)) {
    const element = todos[key];
    console.log(element);
  }
}

// forEach en objetos
Object.values(todos).forEach((item) => console.log(item));

// Acceder al elemento según su indice
console.log(todos[1]);

// Nos sirve para contar elementos
console.log(Object.keys(todos).length);
```

## HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>❤ Regalame un Like ❤</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
</head>
<body>
    <div class="container">
        <h1 class="my-5">ToDo List</h1>
        <form id="formulario">
            <input type="text"
                placeholder="Ingrese tarea"
                class="form-control my-2"
            >
            <button class="btn btn-primary btn-block" type="submit">Agregar</button>
        </form>

        <hr>

        <div id="lista-tareas" class="mt-2">
            <div class="alert alert-dark">
                Sin tareas pendientes 😍
            </div>
        </div>
    </div>
    
    <template id="template">
        <div class="alert alert-warning d-flex justify-content-between align-items-center">
            <p class="m-0">Tarea #1</p>
            <h3 class="m-0">
                <i class="fas fa-check-circle text-success" role="button"></i>
                <i class="fas fa-minus-circle text-danger"  role="button"></i>
            </h3>
        </div>
    </template>

    <script src="app.js"></script>
</body>
</html>
```

## JS
```js
console.log('Suscríbete al canal y dale me gusta 😍')

const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintarTareas()
})

listaTareas.addEventListener('click', (e) => {btnAccion(e)})

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.querySelector('input').value)
    setTarea(e)
})

const setTarea = e => {
    const texto = e.target.querySelector('input').value
    
    if (texto.trim() === '') {
        console.log('está vacio')
        return
    }
    const tarea = {
        id: Date.now(),
        texto: texto,
        estado: false
    }
    
    tareas[tarea.id] = tarea
    pintarTareas()

    formulario.reset()
    e.target.querySelector('input').focus()
}

const pintarTareas = () => {
    
    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        listaTareas.innerHTML = `
        <div class="alert alert-dark text-center">
        Sin tareas pendientes 😍
        </div>
        `
        return
    }
    
    listaTareas.innerHTML = ''

    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto

        if (tarea.estado) {
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}

const btnAccion = e => {
    // console.log(e.target.classList.contains('fa-check-circle'))
    if (e.target.classList.contains('fa-check-circle')) {
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
    }

    if (e.target.classList.contains('fa-minus-circle')) {
        // console.log(e.target.dataset.id)
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }

    if (e.target.classList.contains('fa-undo-alt')) {
        tareas[e.target.dataset.id].estado = false
        pintarTareas()
    }

    e.stopPropagation()
}
```
