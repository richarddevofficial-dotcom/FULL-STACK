// 1️⃣ Business logic (closure)
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  let transactions = [];

  return {
    deposit(amount) {
      if (amount <= 0) return;
      balance += amount;
      transactions.push(`Deposited ${amount}`);
    },
    withdraw(amount) {
      if (amount > balance) return;
      balance -= amount;
      transactions.push(`Withdrew ${amount}`);
    },
    getBalance() {
      return balance;
    },
    getTransactions() {
      return [...transactions];
    },
  };
}

// 2️⃣ Create account instance
const account = createBankAccount(100);

// 3️⃣ Testing the account logic

console.log("Initial Balance:", account.getBalance()); // 100

account.deposit(50);
console.log("After Deposit of 50:", account.getBalance()); // 150

account.withdraw(30);
console.log("After Withdrawal of 30:", account.getBalance()); // 120

console.log("Transaction History:", account.getTransactions());
// ["Deposited 50", "Withdrew 30"]
