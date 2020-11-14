
let myAccount = {
    name: "Karan",
    expenses: 0,
    income: 0
}

let addExpenses = function(account, amount){
    account.expenses += amount
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account){
    console.log(`${account.name}'s account has a balance of ${account.income - account.expenses}, ${account.income} as income and ${account.expenses} as expenses`)    
}

addIncome(myAccount, 250)
addExpenses(myAccount,25)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
