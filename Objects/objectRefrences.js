
let myAccount = {
    name: "Karan",
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}
otherAccount.income = 0

let addExpense = function(account, amount){
    account.expenses += amount
    console.log(account)
}

addExpense(myAccount, 2.5)
console.log(myAccount)