# Vue.js + Carrito
Apliquemos todo lo aprendido del carrito de compras con Vue.js + Composition API

## Apoya el Directo :)
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

## Vuex
```js
import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = { ...payload }
      console.log(state.carrito)
    },
    setVaciar(state) {
      state.carrito = {}
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const productos = await res.json()
        commit('setProductos', productos)
      } catch (error) {
        console.log(error)
      }
    },
    agregarCarrito({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    }
  }
})
```

## App.vue
```vue
<template>
  <div class="container">
    <h1>Carrito con vue.js</h1>
    <hr>
    <Carrito />
    <div class="row">
      <div 
        v-for="producto of productos" :key="producto.id"
        class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3"
      >
        <Card 
          :producto="producto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import { computed, onMounted } from 'vue'
import Card from './components/Card'
import Carrito from './components/Carrito'

export default {
  name: 'App',
  components: {
    Card, Carrito
  },
  setup(){
    const store = useStore()
    onMounted(async() => {
      store.dispatch('fetchData')
    })

    const productos = computed(() => store.state.productos)

    return {productos}
  }
}
</script>
```

## Card.vue
```vue
<template>
    <div class="card">
        <img :src="producto.thumbnailUrl" :alt="`imagen ${producto.title}`" class="card-img-top" />
        <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">$ <span>{{producto.precio}}</span></p>
        <button class="btn btn-dark" @click="comprar(producto)">Comprar</button>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    props: ['producto'],
    setup(){
        const store = useStore()
        const comprar = producto => {
            store.dispatch('agregarCarrito', producto)
        }
        return {comprar}
    }
}
</script>
```

## Carrito.vue
```vue
<template>
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
            <tbody id="items">
                <Items
                    v-for="item in carrito" :key="item.id"
                    :item="item"
                />
            </tbody>
            <tfoot>
            <tr id="footer-carrito">
                <th scope="row" colspan="5" v-if="Object.keys(carrito).length === 0">Carrito vacío - comience a comprar!</th>
                <Footer v-else/>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { computed } from 'vue'
import {useStore} from 'vuex'
import Items from './Items'
import Footer from './Footer'
export default {
    components: {Items, Footer},
    setup(){
        const store = useStore()
        const carrito = computed(() => store.state.carrito)

        return {carrito}
    }
}
</script>
```

## Item.vue
```vue
<template>
  <tr>
    <th scope="row">{{item.id}}</th>
    <td>{{item.title}}</td>
    <td>{{item.cantidad}}</td>
    <td>
        <button class="btn btn-info btn-sm" @click="aumentar(item.id)">
            +
        </button>
        <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
            -
        </button>
    </td>
    <td>${{item.precio * item.cantidad}}</td>
  </tr>
</template>

<script>
import {useStore} from 'vuex'
export default {
    props: ['item'],
    setup(){
        const store = useStore()
        const aumentar = id => {store.commit('aumentar', id)}
        const disminuir = id => {store.commit('disminuir', id)}
        return {aumentar, disminuir}
    }
}
</script>
```

## Footer.vue
```vue
<template>
  <th scope="row" colspan="2">Total productos</th>
    <td>{{totalCantidad}}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciar">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ <span>{{totalPrecio}}</span></td>
</template>

<script>
import { computed } from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        const totalCantidad = computed(() => store.getters.totalCantidad)
        const totalPrecio = computed(() => store.getters.totalPrecio)
        const vaciar = () => {store.commit('setVaciar')}

        return {totalCantidad, totalPrecio, vaciar}
    }
}
</script>
```