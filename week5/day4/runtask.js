// taskRunner.js

// ---------- Task 1: delay(ms, cb) ----------
function delay(ms, cb) {
  setTimeout(cb, ms);
}

// ---------- Task 2: Sequential / Concurrency Runner ----------
function runTasks(tasks, finalCb, concurrency = 1) {
  let index = 0; // next task to start
  let running = 0; // currently running tasks
  let completed = 0; // completed tasks

  function runNext() {
    while (running < concurrency && index < tasks.length) {
      const task = tasks[index];
      index++;
      running++;

      task(() => {
        running--;
        completed++;

        if (completed === tasks.length) {
          finalCb();
        } else {
          runNext();
        }
      });
    }
  }

  runNext();
}

// ---------- Example Usage ----------

// Simple sequential tasks
const tasks = [
  (next) => {
    console.log("A");
    next();
  },
  (next) => {
    console.log("B");
    next();
  },
  (next) => {
    console.log("C");
    next();
  },
];

runTasks(tasks, () => console.log("All finished!"), 1); // concurrency = 1 (sequential)

// Example with async tasks & concurrency
const asyncTasks = [
  (next) =>
    delay(1000, () => {
      console.log("Task 1 (1s)");
      next();
    }),
  (next) =>
    delay(500, () => {
      console.log("Task 2 (0.5s)");
      next();
    }),
  (next) =>
    delay(800, () => {
      console.log("Task 3 (0.8s)");
      next();
    }),
  (next) =>
    delay(300, () => {
      console.log("Task 4 (0.3s)");
      next();
    }),
];

runTasks(asyncTasks, () => console.log("All async tasks finished!"), 2); // concurrency = 2
