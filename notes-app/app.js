const notes = [
    {
        title: 'Learn JS',
        body: 'Learn Javascript for making dynamic websites'
    },
    {
        title: 'Learn Cryptography',
        body: 'For personal interest'
    },
    {
        title: 'Create a cryptography project',
        body: 'Using python'
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

const filters = {
    searchText : ''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) || note.body.toLowerCase().includes(filters.searchText.toLowerCase())

    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes,filters)

document.querySelector('button').addEventListener('click',function(e){
    console.log('Did this work')
    e.target.textContent = 'This button was clicked'
})


document.querySelector('#searchText').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#first-name').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})