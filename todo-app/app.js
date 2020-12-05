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

const incompleteTodos = todos.filter(function(e){
    return !e.completed
})
console.log(incompleteTodos.length)
newParagraph = document.createElement('p')
newParagraph.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(newParagraph)
incompleteTodos.forEach(function(e){
    const newParagraph = document.createElement('p')
    newParagraph.textContent = e.text
    document.querySelector('body').appendChild(newParagraph)
})

document.querySelector('#addTodo').addEventListener('click',function(e){
    todoText = document.querySelector('#newTodo').value
    newTodo = {text: todoText,completed: false}
    todos.push(newTodo)
    const newTodoElement = document.createElement('p')
    newTodoElement.textContent = todoText
    document.querySelector('body').appendChild(newTodoElement)
    console.log(todos)
})

document.querySelector('#newTodo').addEventListener('input',function(e){
    console.log(e.target.value)
})
