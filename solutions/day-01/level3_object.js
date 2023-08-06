let personAccount = {
    firstName: "Tanmoy",
    lastName: "Pranto",
    incomes: {
        job: 20000,
        stock: 10000,
        freelancing: 15000
    },
    expenses: {
        household: 20000,
        personal: 5000,
        others: 10000
    },

    totalIncome: function(){
        let amounts = Object.values(this.incomes)
        let total = 0
        for(let i=0;i<amounts.length;i++){
            total += amounts[i]
            // console.log(keys[i])
        }
        return total
    },
    totalExpense: function(){
        let amounts = Object.values(this.expenses)
        let total = 0
        for(let i=0;i<amounts.length;i++){
            total += amounts[i]
            // console.log(keys[i])
        }
        return total
    },
    addExpense: function(key,value){
        // console.log(this.expenses)
        this.expenses[key] = value
    }
}


personAccount.addExpense("Biya",100000)
console.log(personAccount.expenses)

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())