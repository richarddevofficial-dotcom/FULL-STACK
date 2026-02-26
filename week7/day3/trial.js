// Provides a pause mechanism
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// Retry Utility
async function withRetry(fn, attempts = 3, delayMs = 0) {
  let lastError;

  for (let i = 1; i <= attempts; i++) {
    try {
      console.log(`Attempt ${i}...`);
      return await fn();
    } catch (err) {
      lastError = err;

      console.log(`Failed attempt ${i}: ${err.message}`);

      if (i === attempts) {
        console.log("No more retries left.");
        throw lastError;
      }

      if (delayMs > 0) {
        await delay(delayMs);
      }
    }
  }
}

// Mock flaky function
let count = 0;

async function flakyTask() {
  count++;
  if (count < 3) {
    throw new Error("Network timeout - Try again");
  }
  return `Success on attempt ${count}!`;
}

// Execute
async function runTest() {
  try {
    const result = await withRetry(flakyTask, 5, 200);
    console.log("Final Result:", result);
  } catch (err) {
    console.error("All attempts failed:", err.message);
  }
}

runTest();
