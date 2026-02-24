// Implement the function:

// runStepsWithError(steps, done)
// Description

// steps is an array of functions.

// done is a callback that runs when execution finishes or fails.

// Each step receives:

// (next, fail)

// next() → move to the next step

// fail() → stop execution immediately

// Requirements

// Your function must:

// Execute steps in order.

// Only proceed when next() is called.

// Stop immediately if fail() is called.

// If fail() is called:

// Do NOT run remaining steps.

// Call done("Error occurred").

// If all steps succeed:

// Call done().

function runStepsWithError(steps, done) {
  let index = 0;

  function runNext() {
    // If all steps are done, call done without error
    if (index >= steps.length) {
      return done();
    }

    // Current step
    const step = steps[index];
    index++;

    // Call the step with next and fail callbacks
    step(
      () => runNext(), // next()
      () => done("Error occurred"), // fail()
    );
  }

  // Start the first step
  runNext();
}

//Example Usage
const steps = [
  (next, fail) => {
    console.log("Step 1");
    next();
  },
  (next, fail) => {
    console.log("Step 2");
    next();
  },
  (next, fail) => {
    console.log("Step 3");
    fail();
  }, // This will stop execution
  (next, fail) => {
    console.log("Step 4");
    next();
  },
];

runStepsWithError(steps, (err) => {
  if (err) {
    console.log(err); // Output: "Error occurred"
  } else {
    console.log("All steps completed successfully");
  }
});
