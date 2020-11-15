const todos = [
    {
        text: 'text 1',
        completed: false
    },
    {
        text: 'text 2',
        completed: true
    },
    {
        text: 'text 3',
        completed: true
    },
    {
        text: 'text 4',
        completed: false
    }
]

const findTodoIndex = function(todos , text){
    return todos.findIndex(function(todo){
        return todo.text.toLowerCase() === text.toLowerCase()
    })
}

const removeTodo = function(todos, text){
    todos.splice(findTodoIndex(todos,text),1)
}

const getThingsToDo = function(todos){
    return todos.filter(function(todo,index){
        return !todo.completed
    })
}

const sortTodo = function(todos){
    todos.sort(function(a,b){
        if(a.completed){
            return 1
        }else{
            return -1
        }
    })
}

sortTodo(todos)
console.log(todos)