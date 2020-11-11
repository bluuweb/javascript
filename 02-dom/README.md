# DOM

## Requisitos

- [Fundamentos de HTML y CSS](https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm)
- [Fundamentos de Javascript](https://bluuweb.github.io/javascript/)
<iframe width="560" height="315" src="https://www.youtube.com/embed/Z4TuS0HEJP8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. [VAR vs LET vs CONST](https://youtu.be/Z4TuS0HEJP8?t=61)
2. [Funciones de Flecha](https://youtu.be/Z4TuS0HEJP8?t=690)
3. [Template String](https://youtu.be/Z4TuS0HEJP8?t=1386)
4. [Objetos](https://youtu.be/Z4TuS0HEJP8?t=1655)
5. [Destructuring Objects](https://youtu.be/Z4TuS0HEJP8?t=2005)
6. [Array de Objetos](https://youtu.be/Z4TuS0HEJP8?t=2182)
7. [Fetch API](https://youtu.be/Z4TuS0HEJP8?t=2538)
8. [Async & Await](https://youtu.be/Z4TuS0HEJP8?t=3059)
9. [Map()](https://youtu.be/Z4TuS0HEJP8?t=3333)
10. [Filter()](https://youtu.be/Z4TuS0HEJP8?t=3611)

## Preguntas y Respuestas

- [https://discord.gg/xSceUPh](https://discord.gg/xSceUPh)

## ¿Qué vamos a realizar?
- [https://bluuweb-dom-v1.netlify.app/](https://bluuweb-dom-v1.netlify.app/)

1. Traer productos desde un json utilizando fetch.
2. Pintar productos en Dom con fragment y templates html.
3. Agregar y quitar productos a carrito de compras.
4. Mostrar cantidades y totales de estos productos.
5. Acción de agregar o eliminar productos desde carrito de compras.
6. Botón vacias carrito de compras.
7. Respaldar datos en LocalStorage (en construcción...)
8. Subir proyecto a hosting gratuito.

## ¿Qué es DOM?

- [https://developer.mozilla.org/](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)

El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.

## Document

- [https://developer.mozilla.org/](https://developer.mozilla.org/es/docs/Web/API/Document)
- Cuando un documento HTML se carga en un navegador web, se convierte en un objeto de documento.
- El objeto de documento es el nodo raíz del documento HTML.
- La interfaz Document representa cualquer página web cargada en el navegador y sirve como punto de entrada al contenido de la página (El árbol DOM).
- El DOM incluye elementos como `<body>` y `<table>`), entre muchos otros, y proporciona funcionalidad que es global al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

## Acceder al DOM

```html
<p class="parrafo">Hola este es mi párrafo</p>

<script>
  document.querySelector(".parrafo").textContent = "Párrafo dinámico";
</script>
```

Este es un ejemplo sencillo del poder de manipular nuestro DOM con JS.

## Buscar elementos HTML

- [https://www.w3schools.com/](https://www.w3schools.com/js/js_htmldom_document.asp)
- [document.getElementById()](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
- [document.querySelector()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)
- [document.querySelectorAll()](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)

```html
<p class="parrafo" id="mi-id">Hola este es mi párrafo</p>
<p class="parrafo" id="mi-id-dos">Hola este es mi párrafo</p>

<script>
  console.log(document.head);
  console.log(document.body);
  console.log(document.getElementById("mi-id"));
  console.log(document.querySelector("#mi-id"));
  console.log(document.querySelector(".mi-id"));
  console.log(document.querySelector("p"));
  console.log(document.querySelectorAll("p"));
</script>
```

## Element

Una vez que tenemos el elemento podemos modificarlo.

- [https://developer.mozilla.org/](https://developer.mozilla.org/es/docs/Web/API/Element)

1. Accedemos al elemento
2. Modificamos el elemento

```html
<p class="parrafo" id="mi-id">Hola este es mi párrafo</p>

<script>
  const parrafo = document.querySelector(".parrafo");
  parrafo.textContent = "Parrafo dinámico";
</script>
```

Más ejemplos:

```js
// Agregamos texto + etiquetas html
parrafo.innerHTML = "<b>Texto destacado</b> dentro de párrafo";

// Nos devuelve la clase del párrafo
console.log(parrafo.className);

// Agregamos una clase adicional
parrafo.classList.add("clase-adicional");
console.log(parrafo);
```

## createElement()

- [https://developer.mozilla.org/](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
- En un documento HTML, el método `document.createElement()` crea un elemento HTML especificado por su tagName.

```html
<ul id="lista-dinamica"></ul>

<script>
  // elemento donde vamos a incorporar los <li>
  const lista = document.getElementById("lista-dinamica");

  // Creamos el <li>
  const li = document.createElement("li");

  // Agregamos texto al <li>
  li.textContent = "Mi <li> dinámico";

  // Finalmente incorporamos al <ul>
  lista.appendChild(li);
</script>
```

<b>Varios elementos (no recomendado):</b>

```js
const lista = document.getElementById("lista-dinamica");

const arrayItem = ["item 1", "item 2", "item 3"];

arrayItem.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  lista.appendChild(li);
});
```

<b>Otra opción tentadora (no recomendado):</b> [Template String](https://www.youtube.com/watch?v=Z4TuS0HEJP8&feature=youtu.be&t=1386)

```js
const lista = document.getElementById("lista-dinamica");

const arrayItem = ["item 1", "item 2", "item 3"];

arrayItem.forEach((item) => {
  lista.innerHTML += `
            <li>${item}</li>
          `;
});
```

Aquí se genera [Reflow](https://developer.mozilla.org/en-US/docs/Glossary/reflow): Ocurre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.

## Fragment

- [https://developer.mozilla.org/](https://developer.mozilla.org/es/docs/Web/API/DocumentFragment)

Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar.

Por ende en un fragment vamos a guardar todo un template o nodos HTML que luego pintaremos en nuestro DOM, así evitamos en mayor parte el Reflow.

```html
<ul id="lista-dinamica"></ul>

<script>
  const lista = document.getElementById("lista-dinamica");

  const arrayItem = ["item 1", "item 2", "item 3"];

  const fragment = document.createDocumentFragment();

  arrayItem.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    fragment.appendChild(li);
  });

  lista.appendChild(fragment);
</script>
```

## Insertar primero

- [Node/firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
- [insertBefore()](https://developer.mozilla.org/es/docs/Web/API/Node/insertarAntes)

```html
<ul id="lista-dinamica"></ul>

<script>
  const lista = document.getElementById("lista-dinamica");
  const arrayItem = ["item 1", "item 2", "item 3"];
  const fragment = document.createDocumentFragment();

  arrayItem.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    // Nos devuelve el primer elemento
    const referenceNode = fragment.firstChild;
    // En caso de que no exista un nodo hijo tirará null
    console.log("primer li", referenceNode);

    // Si "referenceNode" es null, el newNode se insertará al final de la lista de nodos hijos.
    // parentNode.insertBefore(newNode, referenceNode);
    fragment.insertBefore(li, referenceNode);
  });

  lista.appendChild(fragment);
</script>
```

## Template HTML

Supongamos que necesitamos incorporar de forma dinámica este elemento:

```html
<li class="list">
  <b>Nombre: </b> <span class="text-danger">descripción...</span>
</li>
```

Utilizando Fragment y createElement tendriamos el siguiente resultado:

```js
const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];
const fragment = document.createDocumentFragment();

arrayItem.forEach((item) => {
  // creamos li
  const li = document.createElement("li");
  // agregamos clase a li
  li.classList.add("list");
  // creamos b
  const b = document.createElement("b");
  // agregamos texto a b
  b.textContent = "Nombre: ";
  // creamos span
  const span = document.createElement("span");
  // agregamos clase a span
  span.classList.add("text-danger");
  // agremos texto a span
  span.textContent = item;
  // agregamos nodo hijos a li
  li.appendChild(b);
  li.appendChild(span);
  // agregamos li al fragmente
  fragment.appendChild(li);
});

lista.appendChild(fragment);
```

<img :src="$withBase('/img/gif-desesperado.gif')">

Si yo tuve la misma reacción :( ni pensar si la estructura que queremos construir es mucho más compleja!

- Podría ser tentador utilizar innerHTML y Template String... quedaría así

```js
const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];

let template = "";
arrayItem.forEach((item) => {
  template += `
    <li class="list">
        <b>nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `;
});
lista.innerHTML = template;
```

Se ve una solución hermosa, pero... a muchos enoja este método.
<img :src="$withBase('/img/no-bueno.gif')">

:::warning Hipótesis
Ojo que aquí estamos reemplazando `fragment` por `let template`, por ende hace un efecto parecido y minimizamos el `reflow`, ya que solo una vez que tenemos nuestro templateString listo, lo incorporamos al HTML.

Aquí un texto completo: [innerHTML vs createElement](https://medium.com/@kevinchi118/innerhtml-vs-createelement-appendchild-3da39275a694#:~:text=While%20clean%2C%20using%20innerHTML%20reparses,multiple%20things%20to%20an%20element.)

Pero la batalla es brutal jajaja aquí algunas opiniones al respecto:

- [1](https://stackoverflow.com/questions/49758867/which-is-better-to-use-doucment-fragment-or-string-concatenation-while-appendi)
- [2](https://stackoverflow.com/questions/15182402/javascript-document-createelement-or-html-tags)
- [3](https://stackoverflow.com/questions/2305654/innerhtml-vs-appendchildtxtnode)
- [4](https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml)

¡Alerta de spoiler! no utilizaremos este método, pero... ¿tú que opinas?
:::

### ¿Entonces cual es la mejor solución?

- [template](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/template)

El elemento HTML `<template>` es un mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.

La mejor solución sería utilizar `template` y `fragment`

```html
<ul id="lista-dinamica"></ul>
<template>
  <li class="list">
    <b>nombre: </b> <span class="text-danger">descripción...</span>
  </li>
</template>
```

```js
const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];

const fragment = document.createDocumentFragment();
const template = document.querySelector("#template-li").content;

arrayItem.forEach((item) => {
  template.querySelector("span").textContent = item;
  const clone = template.cloneNode(true);
  // const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
```

Ahora todos felices :)

<img :src="$withBase('/img/feliz.gif')">

Ahora a la práctica!

## Práctica - Template

- [https://getbootstrap.com/](https://getbootstrap.com/)
- [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
- [https://picsum.photos/](https://picsum.photos/)

```json
[
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]
```

```html
<div class="row my-5" id="lista-productos">
  <template id="template-producto">
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
      <div class="card">
        <img src="" alt="" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">$ <span></span></p>
          <button class="btn btn-dark">Comprar</button>
        </div>
      </div>
    </div>
  </template>
</div>
```

```js
document.addEventListener("DOMContentLoaded", (e) => {
  obtenerProductos();
});

// listar productos
const listaProductos = document.querySelector("#lista-productos");

const obtenerProductos = async () => {
  try {
    const res = await fetch("js/productos.json");
    const data = await res.json();
    pintarTemplate(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarTemplate = (data) => {
  const template = document.querySelector("#template-producto").content;
  const fragment = new DocumentFragment();

  data.forEach((producto) => {
    template.querySelector("img").setAttribute("src", producto.thumbnailUrl);
    template.querySelector("h5").textContent = producto.title;
    template.querySelector(".card-text span").textContent = producto.precio;
    // https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset
    template.querySelector("button").setAttribute("data-id", producto.id);
    const clone = template.cloneNode(true);
    // const clone = document.importNode(template, true);
    fragment.appendChild(clone);
  });

  listaProductos.appendChild(fragment);
};
```

## Evento btn comprar

```js{6}
const obtenerProductos = async () => {
  try {
    const res = await fetch("js/productos.json");
    const data = await res.json();
    pintarTemplate(data);
    eventoBotones(data);
  } catch (error) {
    console.log(error);
  }
};
```

```js
const eventoBotones = (data) => {
  const btnAgregar = document.querySelectorAll(".btn-dark");
  btnAgregar.forEach((btn) => {
    btn.addEventListener("click", () => {
      // console.log(btn.dataset.id)
      // Buscamos el producto en nuestra data
      // console.log(parseInt(btn.dataset.id))
      const [producto] = data.filter(
        (item) => item.id === parseInt(btn.dataset.id)
      );
      // creamos un producto para el carrito
      const productoCarrito = {
        id: producto.id,
        title: producto.title,
        cantidad: 1,
        precioTotal: producto.precio,
      };
      const exiteEnCarrito = carrito.some(
        (item) => item.id === productoCarrito.id
      );
      if (exiteEnCarrito) {
        const productos = carrito.map((item) => {
          if (item.id === productoCarrito.id) {
            item.cantidad++;
            item.precioTotal = item.precioTotal + productoCarrito.precioTotal;
            return item;
          } else {
            return item;
          }
        });
        carrito = [...productos];
      } else {
        carrito.push(productoCarrito);
      }
      pintarEnCarrito();
    });
  });
};
```

## Pintar carrito

```html
<div class="my-5">
  <h4>Carrito de compras</h4>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Item</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Acción</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody id="items"></tbody>
    <tfoot>
      <tr id="footer-carrito">
          <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
      </tr>
    </tfoot>
  </table>
</div>

<template id="template-footer">
    <th scope="row" colspan="2">Total productos</th>
    <td>10</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ <span>5000</span></td>
</template>

<template id="template-carrito">
  <tr>
    <th scope="row">1</th>
    <td>Café</td>
    <td>1</td>
    <td>
        <button class="btn btn-info btn-sm">
            +
        </button>
        <button class="btn btn-danger btn-sm">
            -
        </button>
    </td>
    <td>$500</td>
  </tr>
</template>
```

```js
const footerCarrito = document.querySelector("#footer-carrito");
const itemsCarrito = document.querySelector("#items");
let carrito = [];
```

```js
const pintarEnCarrito = () => {
    // Limpiamos el elemento ya que necesitamos reemplazar su contenido
    itemsCarrito.innerHTML = ''

    const template = document.querySelector("#template-carrito").content;
    const fragment = document.createDocumentFragment();

    // console.log(carrito)
    carrito.forEach(item => {
        template.querySelector("th").textContent = item.id;
        template.querySelectorAll("td")[0].textContent = item.title;
        template.querySelectorAll("td")[1].textContent = item.cantidad;
        template.querySelector('.btn-danger').setAttribute('data-id', item.id)
        template.querySelector('.btn-info').setAttribute('data-id', item.id)
        template.querySelectorAll("td")[3].textContent = item.precioTotal;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    
    itemsCarrito.appendChild(fragment);  
    borrarItemCarrito()
    totalFooter();
};
```

## Total footer
```js
const totalFooter = () => {
    if (carrito.length === 0) {
        footerCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    }

    const nProductos = carrito.reduce((a, b) => ({ cantidad: a.cantidad + b.cantidad }))
    // console.log(nProductos.cantidad)

    const nPrecio = carrito.reduce((a, b) => ({ precioTotal: a.precioTotal + b.precioTotal }))
    // console.log(nPrecio.precioTotal)

    // Limpiamos el elemento ya que necesitamos reemplazar su contenido
    footerCarrito.innerHTML = ''
    const template = document.querySelector("#template-footer").content;
    const fragment = document.createDocumentFragment();

    template.querySelectorAll('td')[0].textContent = nProductos.cantidad
    template.querySelector('.font-weight-bold span').textContent = nPrecio.precioTotal

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    footerCarrito.appendChild(fragment)


    const vaciarCarrito = document.querySelector('#vaciar-carrito')
    vaciarCarrito.addEventListener('click', () => {
        carrito = []
        pintarEnCarrito()
    })
}
```


## Borrar item carrito
```js
const borrarItemCarrito = () => {
    const btnAgregar = document.querySelectorAll('#items .btn-info')
    const btnEliminar = document.querySelectorAll('#items .btn-danger')

    btnAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(parseInt(btn.dataset.id))
            const arrayFiltrado = carrito.map(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal + item.precioTotal/item.cantidad
                    item.cantidad++
                    // console.log(item.cantidad)
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

    btnEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const arrayFiltrado = carrito.filter(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal - item.precioTotal/item.cantidad
                    item.cantidad--
                    // console.log(item.cantidad)
                    if (item.cantidad === 0) {
                        return
                    }
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

}
```


## Todo junto

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <h1>DOM</h1>

      <div class="row my-5" id="lista-productos">
        <template id="template-producto">
          <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
            <div class="card">
              <img src="" alt="" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">$ <span></span></p>
                <button class="btn btn-dark">Comprar</button>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="my-5">
        <h4>Carrito de compras</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acción</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody id="items"></tbody>
          <tfoot>
            <tr id="footer-carrito">
                <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <template id="template-footer">
        <th scope="row" colspan="2">Total productos</th>
        <td>10</td>
        <td>
            <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                vaciar todo
            </button>
        </td>
        <td class="font-weight-bold">$ <span>5000</span></td>
    </template>

    <template id="template-carrito">
      <tr>
        <th scope="row">1</th>
        <td>Café</td>
        <td>1</td>
        <td>
            <button class="btn btn-info btn-sm">
                +
            </button>
            <button class="btn btn-danger btn-sm">
                -
            </button>
        </td>
        <td>$500</td>
      </tr>
    </template>

    <script src="js/app.js"></script>
  </body>
</html>

```

```js
document.addEventListener("DOMContentLoaded", (e) => {
  obtenerProductos();
});

// listar productos
const listaProductos = document.querySelector("#lista-productos");
const footerCarrito = document.querySelector("#footer-carrito");
const itemsCarrito = document.querySelector("#items");
let carrito = [];

const obtenerProductos = async () => {
  try {
    const res = await fetch("js/productos.json");
    const data = await res.json();
    pintarTemplate(data);
    eventoBotones(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarTemplate = (data) => {
  const template = document.querySelector("#template-producto").content;
  const fragment = new DocumentFragment();
  data.forEach((producto) => {
    template.querySelector("img").setAttribute("src", producto.thumbnailUrl);
    template.querySelector("h5").textContent = producto.title;
    template.querySelector(".card-text span").textContent = producto.precio;
    // https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset
    template.querySelector("button").setAttribute("data-id", producto.id);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  listaProductos.appendChild(fragment);
};

const eventoBotones = (data) => {
  const btnAgregar = document.querySelectorAll(".btn-dark");
  btnAgregar.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log(btn.dataset.id)
        // Buscamos el producto en nuestra data
        // console.log(parseInt(btn.dataset.id))
        const [producto] = data.filter(
            (item) => item.id === parseInt(btn.dataset.id)
        );
        // console.log(producto)
        
        // creamos un producto para el carrito
        const productoCarrito = {
            id: producto.id,
            title: producto.title,
            cantidad: 1,
            precioTotal: producto.precio
        }

        const exiteEnCarrito = carrito.some(item => item.id === productoCarrito.id)
        // console.log(exiteEnCarrito)
        if (exiteEnCarrito) {
            const productos = carrito.map(item => {
                if (item.id === productoCarrito.id) {
                    item.cantidad++
                    item.precioTotal = item.precioTotal + productoCarrito.precioTotal
                    return item;
                } else {
                    return item
                }
            })
            carrito = [...productos]
        } else {
            carrito.push(productoCarrito);
        }
    
        pintarEnCarrito();
    });
  });
};

const totalFooter = () => {
    if (carrito.length === 0) {
        footerCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    }

    const nProductos = carrito.reduce((a, b) => ({ cantidad: a.cantidad + b.cantidad }))
    // console.log(nProductos.cantidad)

    const nPrecio = carrito.reduce((a, b) => ({ precioTotal: a.precioTotal + b.precioTotal }))
    // console.log(nPrecio.precioTotal)

    // Limpiamos el elemento ya que necesitamos reemplazar su contenido
    footerCarrito.innerHTML = ''
    const template = document.querySelector("#template-footer").content;
    const fragment = document.createDocumentFragment();

    template.querySelectorAll('td')[0].textContent = nProductos.cantidad
    template.querySelector('.font-weight-bold span').textContent = nPrecio.precioTotal

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    footerCarrito.appendChild(fragment)


    const vaciarCarrito = document.querySelector('#vaciar-carrito')
    vaciarCarrito.addEventListener('click', () => {
        carrito = []
        pintarEnCarrito()
    })
}


const pintarEnCarrito = () => {

    // Limpiamos el elemento ya que necesitamos reemplazar su contenido
    itemsCarrito.innerHTML = ''

    const template = document.querySelector("#template-carrito").content;
    const fragment = document.createDocumentFragment();

    // console.log(carrito)
    carrito.forEach(item => {
        template.querySelector("th").textContent = item.id;
        template.querySelectorAll("td")[0].textContent = item.title;
        template.querySelectorAll("td")[1].textContent = item.cantidad;
        template.querySelector('.btn-danger').setAttribute('data-id', item.id)
        template.querySelector('.btn-info').setAttribute('data-id', item.id)
        template.querySelectorAll("td")[3].textContent = item.precioTotal;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    
    itemsCarrito.appendChild(fragment);  
    borrarItemCarrito()
    totalFooter();
};

const borrarItemCarrito = () => {
    // console.log('ejecutado')
    const btnAgregar = document.querySelectorAll('#items .btn-info')
    const btnEliminar = document.querySelectorAll('#items .btn-danger')

    btnAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(parseInt(btn.dataset.id))
            const arrayFiltrado = carrito.map(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal + item.precioTotal/item.cantidad
                    item.cantidad++
                    // console.log(item.cantidad)
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

    btnEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const arrayFiltrado = carrito.filter(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal - item.precioTotal/item.cantidad
                    item.cantidad--
                    // console.log(item.cantidad)
                    if (item.cantidad === 0) {
                        return
                    }
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

}

```

## Próximamente
localStorage...