// DOM elements
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const expenseList = document.getElementById("expenseList");
const totalAmountEl = document.getElementById("totalAmount");
const numItemsEl = document.getElementById("numItems");
const highestExpenseEl = document.getElementById("highestExpense");
const errorEl = document.getElementById("error");

// Array to track expenses
let expenses = [];

// Adding expense
addBtn.addEventListener("click", () => {
  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value);
  const category = expenseCategory.value;

  // Validation
  if (name === "" || isNaN(amount) || amount <= 0) {
    errorEl.textContent =
      "Please enter a valid name and amount greater than 0.";
    return;
  }
  errorEl.textContent = "";

  // Creating an expense object
  const expense = { name, amount, category };

  // Add to array
  expenses.push(expense);

  // Add to DOM
  addExpenseToDOM(expense);

  // Update summary
  updateSummary();

  // Clear inputs
  expenseName.value = "";
  expenseAmount.value = "";
});

// Add expense row in DOM
function addExpenseToDOM(expense) {
  const li = document.createElement("li");
  li.textContent = `${expense.name} | ${expense.category} | $${expense.amount.toFixed(2)}`;

  // Add data-category attribute for CSS color coding
  li.setAttribute("data-category", expense.category);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", function () {
    expenseList.removeChild(li);
    expenses = expenses.filter((e) => e !== expense);
    updateSummary();
  });

  li.appendChild(deleteBtn);
  expenseList.appendChild(li);
}

// Clear all expenses
clearBtn.addEventListener("click", function () {
  expenses = [];
  expenseList.innerHTML = "";
  updateSummary();
});

// Update summary
const updateSummary = () => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  totalAmountEl.textContent = total.toFixed(2);
  numItemsEl.textContent = expenses.length;

  if (expenses.length === 0) {
    highestExpenseEl.textContent = "-";
  } else {
    const highest = expenses.reduce(
      (max, e) => (e.amount > max.amount ? e : max),
      expenses[0],
    );
    highestExpenseEl.textContent = `${highest.name} ($${highest.amount.toFixed(2)})`;
  }
};
