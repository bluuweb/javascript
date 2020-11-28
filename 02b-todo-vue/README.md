# ToDo Vue
Práctica de ToDo con Vue + Composition API

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
- [https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)

## Recursos
- [Bootstrap](https://getbootstrap.com/)
- [CDN Font Awesome](https://cdnjs.com/libraries/font-awesome)
- [icon](https://fontawesome.com/icons/times?style=solid)
- [Tutorial LocalStorage bluuweb 🙌](https://www.youtube.com/watch?v=7hR7oTpDukc)

## App.vue
```vue
<template>
  <div class="container">
    <todo-app />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue"


export default {
  name: 'App',
  components: { TodoApp },
}
</script>
```

## TodoApp.vue
```vue
<template>
  <h1 class="my-5">TODO</h1>
  <todo-form />
  <todo-list />
</template>

<script>
import { provide, ref, watchEffect } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
export default {
  components: { TodoForm, TodoList },
  setup(){
    const todos = ref([])
    provide('todos', todos)
    
    if(localStorage.getItem('todos')){
        todos.value = JSON.parse(localStorage.getItem('todos'))
    }

    watchEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos.value))
        // console.log('desde app', todos.value.length)
        // console.log('desde app', todos.value)
    })

  }
}
</script>
```

## TodoForm.vue
```vue
<template>
  <form @submit.prevent="agregarTodo">
    <input 
        type="text"
        placeholder="Create a new todo..."
        class="form-control my-3"
        v-model.trim="texto"
    >
  </form>
</template>

<script>
import { inject, ref, toRef } from 'vue'
export default {
    setup(){

        const todos = inject('todos')

        const texto = ref('')
        
        const agregarTodo = () => {
            if(texto.value === ''){
                console.log('texto vacio')
                return
            }
            const todo = {
                id: Date.now(),
                texto: texto.value,
                estado: false
            }
            
            texto.value = ''

            todos.value.push(todo)
            // console.log(todos.value)
        }
        return {
            texto,
            agregarTodo
        }
    }
}
</script>
```

## TodoList.vue
```vue
<template>
  <ul class="list-group">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />

    <todo-footer v-if="todos.length" />

    <li v-if="todos.length === 0" class="list-group-item">Sin ToDos...</li>
  </ul>
  <todo-filter />
  
</template>

<script>
import { computed, inject, provide, ref } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoFilter from "./TodoFilter.vue";
export default {
  components: { TodoItem, TodoFooter, TodoFilter },
  setup() {
    const todosApp = inject("todos");
    const estado = ref('all')

    const todos = computed(() => {
      if(estado.value === 'all'){
        return todosApp.value
      }
      if(estado.value === 'active'){
        return todosApp.value.filter(item => item.estado === false)
      }
      if(estado.value === 'complete'){
        return todosApp.value.filter(item => item.estado === true)
      }
    })

    provide('estado', estado)

    return {
      todos
    };
  },
};
</script>
```

## TodoItem.vue
```vue
<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span 
        role="button"
        :class="{completada: todo.estado}"
        @click="complete(todo.id)"
    >
        {{todo.texto}}
    </span>
    <i class="fas fa-times" role="button" @click="eliminar(todo.id)"></i>
  </li>
</template>

<script>
import { inject, toRef } from 'vue';
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    setup(){
        const todos = inject('todos')
        
        const complete = id => {
            todos.value = todos.value.map(item => {
                if(item.id === id){
                    item.estado = !item.estado
                }
                return item
            })
        }

        const eliminar = id => {
            todos.value = todos.value.filter(item => item.id !== id)
        }

        return {
            complete,
            eliminar
        }
    }
};
</script>

<style scoped>
.completada {
    text-decoration: line-through;
}
</style>
```

## TodoFooter.vue
```vue
<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>
        {{active.length}} items actives
    </span>
    <span
        role="button"
        @click="eliminarCompletados"
    >
        Eliminar Completados
    </span>
  </li>
</template>

<script>
import { computed, inject} from 'vue'
export default {
    setup(){
        const todos = inject('todos')
        
        const active = computed(() => {
            return todos.value.filter(item => item.estado === false)
        })

        const eliminarCompletados = () => {
            todos.value = todos.value.filter(item => !item.estado)
        }

        return {active, eliminarCompletados}
    }
}
</script>
```

## TodoFilter.vue
```vue
<template>
  <div class="btn-group mt-3 d-flex" role="group" aria-label="Basic example">
    <button 
      type="button" 
      class="btn btn-dark-dos w-100"
      @click="filtro('active')"
      :class="{'text-info': estado === 'active'}"
    >Actives</button>
    <button 
      type="button" 
      class="btn btn-dark-dos w-100"
      @click="filtro('all')"
      :class="{'text-info': estado === 'all'}"
    >All</button>
    <button 
      type="button" 
      class="btn btn-dark-dos w-100"
      @click="filtro('complete')"
      :class="{'text-info': estado === 'complete'}"
    >Complete</button>
  </div>
</template>

<script>
import { computed, inject } from "vue";
export default {
  setup() {
    const estado = inject("estado");
    const filtro = (valor) => {
      estado.value = valor;
    };
    return { filtro, estado };
  },
};
</script>
```

