<script setup>
        import { ref } from 'vue';
        const todoInput = ref('')
        const todoList = ref([])
        const addTodo = () => {
                todoList.value.push(todoInput.value)
                todoInput.value = ""
        }
        const removeTodo = (index) => {
               todoList.value.splice(index, 1)
        }
</script>

<template>
        <div class="container">
                <h3>Todo List</h3>
                <div class="input-container">
                        <input type="text" v-model="todoInput">
                        <button @click="addTodo">Add</button>
                </div>
                
                <div class="todo-container">
                        <div v-for="(todo, index) in todoList" class="todo">
                                <div :key="index" class="list-item"> 
                                        {{todo}}
                                        <span @click="removeTodo(index)">X</span>             
                                </div>
                        </div>
                </div>
                
        </div>
        
</template>
<style>
body{
        user-select: none;
        touch-action: manipulation;
        -ms-touch-action: manipulation;
}

.container{
        width: 400px;
        max-width: 90%;
        margin: auto;
        }
.input-container{
        display: flex;
        justify-content: flex-start;
}
.input-container > input{
      flex: 1;
      padding: 8px 0;
      font-size: 16px;
}
.todo-container{
        margin-top: 20px;
        display: grid;
        gap: 10px;
}
.todo{
        border: 1px solid black;
        padding: 10px;
}
.list-item{
        display: flex;
        justify-content: space-between;
}
button{
        border-radius: none;
        background-color: black;
        color: white;
}
</style>