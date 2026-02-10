const globalVari = "what is global varial";

function outer() {
  const outerFunction = "this is outer function";

  function inner() {
    const innerFunction = "this is inner function";
    console.log(inner);
    console.log(outer);
    console.log(globalVari);
  }
  inner();
}

outer();

// Assignment: Bank Account Module

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; // private
  let history = []; // private

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        history.push(`Deposited ${amount}`);
      }
      return balance;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        history.push(`Withdrew  ${amount}`);
      } else {
        console.log("Insufficient funds");
      }
      return balance;
    },
    getBalance() {
      return balance;
    },
    transactionHistory() {
      return [...history]; // return a copy, so history stays private
    },
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(100); // 150
myAccount.withdraw(100); // 120
console.log(`Dear customer your account balance is: ${myAccount.getBalance()}`); // 120
console.log(
  `Dear customer, Below is your Transaction history: ${myAccount.transactionHistory()}`,
);
