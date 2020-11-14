let num = 2.123

console.log(num.toFixed(1))

console.log(Math.round(num))

let randomNum = Math.random()
console.log(randomNum)

let getRandomNum = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomNum(11,23))

// Challenge Area

let makeGuess = function(guess){
    return getRandomNum(1,5) == guess
}

console.log(makeGuess(1))