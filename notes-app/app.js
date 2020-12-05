const notes = [
    {
        title: 'Title 1',
        body: 'Body 1'
    },
    {
        title: 'Title 2',
        body: 'Body 2'
    },
    {
        title: 'Title 3',
        body: 'Body 3'
    }
]
// // DOM - Object in js that models out html document

// // document.querySelector('p').remove() 

// const p = document.querySelectorAll('p')
// p.forEach(function(e){
//     e.textContent = '*********'
// })

// // Adding new  element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is the new Paragraph'
// document.querySelector('body').appendChild(newParagraph)

// Handeling User Interaction
document.querySelector('button').addEventListener('click',function(e){
    console.log('Did this work')
    e.target.textContent = 'This button was clicked'
})

document.querySelector('#removeAll').addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#searchText').addEventListener('input',function(e){
    console.log(e.target.value)
})