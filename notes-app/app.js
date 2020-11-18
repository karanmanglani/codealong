// DOM - Object in js that models out html document

// document.querySelector('p').remove() 

const p = document.querySelectorAll('p')
p.forEach(function(e){
    e.textContent = '*********'
})

