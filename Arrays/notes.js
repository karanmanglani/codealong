
const notes = [
    {},
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

// console.log(notes.length)
// console.log(notes[notes.length - 1])

// //notes.push('new note')
// //notes.pop()
// //notes.shift()
// //notes.unshift('new Note')
// //notes.splice(1,1,'new note 2')

// notes.forEach(function (i, ind) {
//     console.log(i,ind)
// })

// console.log(notes)

// // For loop
// for(let item = 0; item <= 5; item++){
//     console.log(item)
// }

// For objects we should not use indexof for searching as [{} === {}] false only 

// const findNote = function(notes,title){
//     const index = notes.findIndex(function(note, index){
//         return note.title === title
//     })
//     return notes[index]
// }

// const findNote = function(notes,title){
//     return notes.find(function(note){
//         if(note != undefined && note.title != undefined){
//             return note.title.toLowerCase() === title.toLowerCase()
//         }else{
//             return undefined
//         }
        
//     })
// }

// Searching Improved  
const findNote = function(notes,text){
    return notes.filter(function(note, index){
        if(note!= undefined && note.title != undefined && note.body != undefined){
            const isTitleMatch = note.title.toLowerCase().includes(text.toLowerCase())
            const isBodyMatch = note.body.toLowerCase().includes(text.toLowerCase())
            return isTitleMatch || isBodyMatch
        }
    })
}

console.log(findNote(notes, 'dy'))