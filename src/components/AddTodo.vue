<script setup>
import { useTodoStore } from '@/stores/todo'
import { computed, reactive, watch} from 'vue'
import { useRouter } from 'vue-router'

const todoStore = useTodoStore()
const submit = () => {
todoStore.addTodo(todo)
}


const router = useRouter()
// to way data binding ====> v-model
//در ری اکت نداریم اما در انگ.لار و ویو داریم
// const inputValue = ref('')
// const priority = ref('High')//ref('') ===> primative type 

const todo = reactive({
    title:'' ,
    priority:'High'
})

watch(todoStore.todo, () => {
    router.push({name : 'home'})
})
//side effect ==>>  method watch and watchEffect
//watch : کدوم استایت تغییر کرد بیا انجام بده و یک کال بک داره
//watchEffect : 
//computed :یک اکشن فراتر از استیت اصلی انجام میده
//ویو یک سری گتر هایی داره که در دسترس ما هست، که به صورت خودکار ممویاز میکنه ودر قالب فاکشن استفاده نمیشن
//validation 
const isFormInValid =computed(() => {
    return todo.title === '' || todo.priority === ''
})

</script>
<template>
<Wrapper>
    
    <form @submit.prevent="submit">
            <h3>Create a new ToDo</h3>

            <div>
                <label for="title" >Title</label>
                <input type="text" id="title" v-model="todo.title" />
            </div>

            <div>
                <label for="priority" >Priority</label>
                <select id="priority" v-model="todo.priority"> 
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <button :disabled="isFormInValid" type="submit">Add</button>
    </form>
</Wrapper>
</template>

<style lang="scss" scoped></style>
