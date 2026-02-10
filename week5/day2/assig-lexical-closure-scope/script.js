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

// 3️⃣ DOM references
const amountInput = document.getElementById("amount");
const balanceText = document.getElementById("balance");
const historyList = document.getElementById("history");

// 4️⃣ UI functions
function updateUI() {
  balanceText.textContent = `Balance: ${account.getBalance()}`;
  historyList.innerHTML = "";

  account.getTransactions().forEach((tx) => {
    const li = document.createElement("li");
    li.textContent = tx;
    historyList.appendChild(li);
  });
}

// 5️⃣ Event listeners
document.getElementById("depositBtn").addEventListener("click", () => {
  account.deposit(Number(amountInput.value));
  updateUI();
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
  account.withdraw(Number(amountInput.value));
  updateUI();
});

// 6️⃣ Initial render
updateUI();
