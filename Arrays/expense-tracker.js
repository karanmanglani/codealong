const account = {
    name: 'Karan Manglani',
    expenses: [],
    income: [],
    addExpense: function(desc,amt){
        this.expenses.push({
            description: desc,
            amount: amt
        })
    },
    addIncome: function(desc,amt){
        this.income.push({
            description: desc,
            amount: amt
        })
    },
    getAccountSummary: function(){
        exp = 0
        inc = 0
        this.expenses.forEach(function(e){
            exp += e.amount    
        });
        this.income.forEach(function(e){
            inc += e.amount    
        });
        console.log(`${this.name} has $${exp} in expenses and $${inc} in expenses. Total balance = ${inc - exp}`)
    }
}

// Expense --> description , amount
// addExpense --> description , amount
// getAccountSummary --> total up all expenses --> 'Karan has $1000000000000 in expenses'

// add income account to the array
// addIncome method --> description , amt
// tweak getAccountSummary --> 'Karn manglani has 100 in income and 90 in expenses'

account.addExpense('LOL',1200)
account.addIncome('super LOL',1500)
account.getAccountSummary()