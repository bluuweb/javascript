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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TODO APP</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <h1>TODO APP</h1>
      <form id="formulario">
        <input
          type="text"
          placeholder="Ingrese tarea"
          class="form-control"
          id="input"
          autofocus
        />
        <button type="submit" class="btn btn-primary btn-block mt-2">
          Agregar
        </button>
      </form>
      <hr />
      <div id="box-items">
        <p class="text-center alert alert-dark">Sin Tareas pendientes ❤</p>
      </div>
    </div>

    <template id="template-tarea">
      <div
        class="alert alert-warning d-flex justify-content-between align-items-center"
      >
        <p class="m-0">Tarea</p>
        <h3 class="m-0">
          <i class="fas fa-check-circle text-success" role="button"></i>
          <i class="fas fa-minus-circle text-danger" role="button"></i>
        </h3>
      </div>
    </template>

    <script src="app.js"></script>
  </body>
</html>

```

## JS
```js
console.log('Recuerda suscribirte 😍')
// const input = document.getElementById('input')
const formulario = document.getElementById('formulario')
const boxItems = document.getElementById('box-items')
const templateTarea = document.getElementById('template-tarea').content
const fragment = document.createDocumentFragment()
let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'))
        pintarTareas()
    }
})

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0])
    // console.log(e.target.input)
    // console.log(e.target.querySelector('input'))
    agregarTodo(e)
})

const agregarTodo = (e) => {
    if (e.target.input.value.trim() === '') {
        console.log('no existe')
        return
    }

    let tarea = {
        id: new Date().getTime(),
        texto: e.target.input.value,
        estado: false
    }
    
    tareas[tarea.id] = {...tarea}
    formulario.reset()
    e.target.input.focus()
    pintarTareas()
}

const pintarTareas = () => {
    boxItems.innerHTML = ''
    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.keys(tareas).length === 0) {
        boxItems.innerHTML = `
        <p class="text-center alert alert-dark">Sin Tareas pendientes ❤</p>
        `
        return 
    }

    Object.values(tareas).forEach(item => {
        const clone = templateTarea.cloneNode(true)   
        clone.querySelector('p').textContent = item.texto
        if (item.estado) {
            clone.querySelector('.alert').classList.replace('alert-warning', 'alert-info')
            clone.querySelector('p').style.textDecoration = "line-through"
            clone.querySelectorAll('i')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
        }
        clone.querySelectorAll('.fas')[0].dataset.id = item.id
        clone.querySelectorAll('.fas')[1].dataset.id = item.id
        fragment.appendChild(clone)
    })
    boxItems.appendChild(fragment)

}

boxItems.addEventListener('click', e => {
    // boton eliminar
    // console.log(e.target.classList.contains('fa-minus-circle'))
    if (e.target.classList.contains('fa-minus-circle')) {
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }

    // boton success
    if (e.target.classList.contains('fa-check-circle')) {
        const tarea = tareas[e.target.dataset.id]
        tarea.estado = true
        tareas[e.target.dataset.id] = { ...tarea }
        pintarTareas()
    }

    // boton reset
    if (e.target.classList.contains('fa-undo-alt')) {
        const tarea = tareas[e.target.dataset.id]
        tarea.estado = false
        tareas[e.target.dataset.id] = { ...tarea }
        pintarTareas()
    }

    e.stopPropagation()
})
```
