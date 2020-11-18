const p = document.querySelectorAll('p')
p.forEach(function(e){
    if(e.textContent.includes('lol')){
        e.remove()
    }
})