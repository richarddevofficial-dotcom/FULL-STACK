// Payment Processor Module
function createPaymentProcessor() {
  const transactions = [];
  let currentId = 1;

  function processPayment(amount, method = "card", callbacks = []) {
    if (amount <= 0) {
      return {
        success: false,
        message: "Payment failed: Amount must be greater than 0",
      };
    }

    if (Array.isArray(callbacks)) {
      callbacks.forEach((cb) => {
        if (typeof cb === "function") amount = cb(amount);
      });
    }

    let message;
    switch (method.toLowerCase()) {
      case "card":
        message = `Paid $${amount} using Credit/Debit Card ✅`;
        break;
      case "paypal":
        message = `Paid $${amount} via PayPal ✅`;
        break;
      case "mobile":
        message = `Paid $${amount} via Mobile Money ✅`;
        break;
      default:
        return {
          success: false,
          message: `Payment failed: Unsupported method '${method}' ❌`,
        };
    }

    const transaction = {
      id: currentId++,
      method,
      amount,
      message,
      date: new Date(),
    };
    transactions.push(transaction);
    return { success: true, transaction };
  }

  function getHistory() {
    return [...transactions];
  }

  return { processPayment, getHistory };
}

// Instantiate processor
const paymentProcessor = createPaymentProcessor();

// DOM Elements
const form = document.getElementById("paymentForm");
const historyList = document.getElementById("history");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const method = document.getElementById("method").value;
  const discountChecked = document.getElementById("discount").checked;

  const callbacks = [];
  if (discountChecked) {
    callbacks.push((amount) => amount * 0.9); // 10% discount
  }

  const result = paymentProcessor.processPayment(amount, method, callbacks);

  if (result.success) {
    const li = document.createElement("li");
    li.textContent = `${result.transaction.message} (ID: ${result.transaction.id})`;
    historyList.appendChild(li);
  } else {
    alert(result.message);
  }

  form.reset();
});
