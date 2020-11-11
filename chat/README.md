# Chat Firestore
Realizarmos un chat en tiempo real con Firestore, un servicio de Firebase.

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

## Crear proyecto en Firebase

1. [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Habilitar auth con Google
3. Iniciar Firestore

## Configurar Firebase
[https://firebase.google.com/docs/web/setup#add-sdks-initialize](https://firebase.google.com/docs/web/setup#add-sdks-initialize)

```html
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Auth Vainilla JS</title>

    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js"></script>
    <script>
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "xxx",
          authDomain: "xxx",
          databaseURL: "xxx",
          projectId: "xxx",
          storageBucket: "xxx",
          messagingSenderId: "xxx",
          appId: "xxx"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    </script>

  </head>
```

## Auth
```html
<body>

    <div class="container">

        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand" id="nombreUsuario">Chat</span>
            <div id="botones"></div>
        </nav>
    </div>

    <script src="app.js"></script>
</body>
```

## app.js
```js
const botones = document.querySelector('#botones')
const nombreUsuario = document.querySelector('#nombreUsuario')

firebase.auth().onAuthStateChanged(user => {
    if(user){
        nombreUsuario.innerHTML = user.displayName
        accionCerrarSesion()
    }else{
        accionAcceder()
        console.log('usuario no registrado')
        nombreUsuario.innerHTML = 'Chat'
        contenidoWeb.innerHTML = /*html*/`
            <p class="lead mt-5 text-center">Debes iniciar sesión</p>
        `
    }
})

const accionAcceder = () => {

    botones.innerHTML = /*html*/`
        <button class="btn btn-outline-success" id="btnAcceder">Acceder</button>
    `
    
    const btnAcceder = document.querySelector('#btnAcceder')
    
    btnAcceder.addEventListener('click', async() => {
        console.log('entro')
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    })

}

const accionCerrarSesion = () => {
    botones.innerHTML = /*html*/`
        <button class="btn btn-outline-danger" id="btnCerrar">Cerrar Sesión</button>
    `
    const btnCerrar = document.querySelector('#btnCerrar')
    btnCerrar.addEventListener('click', () => firebase.auth().signOut())
}
```

## Formulario
```html
<main id="contenidoWeb" class="mt-2 px-2" style="height: 80vh; overflow-y: scroll;"></main>
        
<form class="input-group mb-3 fixed-bottom container d-none" id='formulario'>
    <input type="text" class="form-control" placeholder="Ingrese mensaje" aria-label="Recipient's username" id="texto">
    <div class="input-group-append">
        <button class="btn btn-primary" type="submit">Enviar</button>
    </div>
</form>
```

```js
firebase.auth().onAuthStateChanged(user => {
    if(user){
        formulario.classList = 'input-group mb-3 fixed-bottom container'
        contenidoChat(user)
    }else{
        formulario.classList = 'input-group mb-3 fixed-bottom container d-none'
    }
})
```

```js
const contenidoChat = (user) => {

    formulario.addEventListener('submit', event => {
        event.preventDefault()
        console.log(texto.value)
        if(!texto.value.trim()){
            console.log('texto vacio')
            return
        }
        firebase.firestore().collection('chat').add({
            texto: texto.value,
            uid: user.uid,
            fecha: Date.now()
        }).then(res => {
            console.log('texto agregado')
        })
        texto.value = ''
    })

    firebase.firestore().collection('chat').orderBy('fecha')
        .onSnapshot(query => {
            query.forEach(doc => {
                if(user.uid === doc.data().uid){
                    contenidoWeb.innerHTML += /*html*/`
                    <div class="d-flex justify-content-end mb-2">
                        <span class="badge badge-primary">
                            ${doc.data().texto}
                        </span>
                    </div>
                    `
                }else{
                    contenidoWeb.innerHTML += /*html*/`
                    <div class="d-flex justify-content-start mb-2">
                        <span class="badge badge-secondary">${doc.data().texto}</span>
                    </div>
                    `
                }
                contenidoWeb.scrollTop = contenidoWeb.scrollHeight
            })
        })

}
```


