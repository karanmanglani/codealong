
let gradeCalcualtor = function(score,maxScore){
    let percent = score/maxScore * 100
    if(percent > 90 & percent <= 100){
        return "A"
    }else if(percent <= 90 && percent > 80){
        return "B"
    }else if(percent > 70 && percent < 80){
        return "C"
    }else if(percent > 60 && percent < 70){
        return "D"
    }else{
        return "E"
    }
}

let grade = gradeCalcualtor(15,20)
console.log(grade)