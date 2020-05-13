# Chat Firestore
Realizarmos un chat en tiempo real con Firestore, un servicio de Firebase.

## Conocimientos previos

1. HTML y CSS: [Ver curso gratis aquí](https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm)
2. Bootstrap 4!: [Ver curso gratis aquí](https://www.youtube.com/watch?v=z7ecV0tL1Gg)
3. Javascript fundamentos: [Ver curso gratis aquí](https://www.youtube.com/watch?v=Zwcqq-7IDI0&list=PLPl81lqbj-4I11QPam9ApoT7tGbmyBg9P)
4. Firebase y Firestore: [Ver curso gratis aquí](https://www.youtube.com/watch?v=gsePWTrOCZE&list=PLPl81lqbj-4JiR1Cio6xEygCZDmZmDUWI)
5. Async await JS: [Ver curso gratis aquí](https://youtu.be/stiPdlSkTOI)
6. DOM JS: [Ver curso gratis aquí](https://www.youtube.com/watch?v=8u4Xef5YtFE)

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


