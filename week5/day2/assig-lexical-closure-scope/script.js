// Connecting UI + Closure
const account = createBankAccount(100);

const amountInput = document.getElementById("amount");
const balanceText = document.getElementById("balance");
const historyList = document.getElementById("history");

function updateUI() {
  balanceText.textContent = `Balance: ${account.getBalance()}`;
  historyList.innerHTML = "";

  account.getTransactions().forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

document.getElementById("depositBtn").addEventListener("click", () => {
  const amount = Number(amountInput.value);
  account.deposit(amount);
  updateUI();
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
  const amount = Number(amountInput.value);
  account.withdraw(amount);
  updateUI();
});

updateUI();
