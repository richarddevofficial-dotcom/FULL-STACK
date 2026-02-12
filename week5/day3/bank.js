function createBankAccount(initialBalance = 0) {
  // Private variables (closure)
  let balance = initialBalance;
  let history = [];

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit must be greater than 0");
        return;
      }

      balance += amount;
      history.push(
        `Dear customer, kindly know that ${amount} is deposited into your account, for more information call our support on 0920 xxx xxx`,
      );
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
        return;
      }

      if (amount <= 0) {
        console.log("Withdrawal must be greater than 0");
        return;
      }

      balance -= amount;
      history.push(
        `Dear Customer, Kindly know ${amount} have been Withdrew from your account, for more information call support on 0920 xxx xxx`,
      );
    },

    getBalance() {
      return balance;
    },

    transactionHistory() {
      return [...history]; // return copy (protect original)
    },
  };
}

//testing in the console

const myAccount = createBankAccount(100);

myAccount.deposit(500);
// myAccount.withdraw(30);
// myAccount.withdraw(10); // Should say insufficient funds

console.log(myAccount.getBalance());
// 120

console.log(myAccount.transactionHistory());
// ["Deposited 50", "Withdrew 30"]
