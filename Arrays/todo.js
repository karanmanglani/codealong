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

removeTodo(todos, 'TeX 3')
console.log(todos[2])