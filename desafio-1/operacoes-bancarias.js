const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
function createTransaction(transaction) {
    user.transactions.push(transaction)
    
    if(transaction.type == "credit") {
        user.balance = user.balance + transaction.value       
    } else {
        user.balance = user.balance - transaction.value
    }
    
}

// Relatórios
//maior transaçao do mesmo tipo 
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

//media das transaçoes
function getAverageTransactionValue(value){
    let media = 0
    for(let transaction of user.transactions) {
        media += transaction.value
    }

    return media / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}


console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }

