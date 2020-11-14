
let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}


let otherBook = {
    title: "A People's History",
    author: "Howard Zinn",
    pageCount: 723
}

// Objects as an argument
// let getSummary = function(book){
//     console.log(`${book.title} is written by ${book.author}`)
// }

// Objects as argument and output
let getSummary = function(book){
    return {
        summary: `${book.title} is written by ${book.author}`,
        pageSummary: `${book.title} is ${book.pageCount} long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary)
console.log(otherBookSummary)
