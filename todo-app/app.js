const todos = [
    {
        text: 'text 1',
        completed: false
    },
    {
        text: 'text 2',
        completed: false
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


// Rendering Incomplete Todos
const renderTodos = function(todos){

    const incompleteTodos = todos.filter(function(e){
        return !e.completed
    })
    
    document.querySelector('#todos').innerHTML = ''
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todos left!!!`
    document.querySelector('#todos').appendChild(todosLeft)
    incompleteTodos.forEach(function(todo){
        const newTodoElement = document.createElement('p')
        newTodoElement.textContent = todo.text
        document.querySelector('#todos').appendChild(newTodoElement)

    })
}

renderTodos(todos)

// Adding Todos
document.querySelector('#addTodo').addEventListener('click',function(e){
    todoText = document.querySelector('#newTodo').value
    newTodo = {text: todoText,completed: false}
    todos.push(newTodo)
    renderTodos(todos)
})

// Searching Todos
document.querySelector('#searchTodo').addEventListener('input',function(e){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(e.target.value.toLowerCase())
    })

    renderTodos(filteredTodos)
})
