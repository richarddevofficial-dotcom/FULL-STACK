function checkDeliveryStatus(orderId) {
  return new Promise((resolve, reject) => {
    if (typeof orderId !== "number" || orderId <= 0) {
      // Invalid orderId → immediate rejection
      reject({ error: "Invalid Order ID" });
      return;
    }

    // simulate 2-second delay
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve({
          status: "Delivered",
          orderId: orderId,
        });
      } else {
        reject({
          status: "Delayed",
          orderId: orderId,
        });
      }
    }, 2000);
  });
}

// ✅ Valid order ID
checkDeliveryStatus(101)
  .then((res) => console.log("Order Status:", res.status))
  .catch((err) => {
    if (err.error) console.log("Error:", err.error);
    else console.log("Order Status:", err.status);
  })
  .finally(() => console.log("Order check completed"));

// ✅ Invalid order ID
checkDeliveryStatus(-5)
  .then((res) => console.log("Order Status:", res.status))
  .catch((err) => {
    if (err.error) console.log("Error:", err.error);
    else console.log("Order Status:", err.status);
  })
  .finally(() => console.log("Order check completed"));
