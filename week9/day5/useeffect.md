React useEffect – Detailed Notes

1. What is useEffect?

useEffect is a React Hook that lets you perform side effects in functional components.

A side effect is any operation that affects something outside the component.

Examples include:

Fetching data from an API 🌐

Updating the DOM

Setting up timers ⏱️

Subscribing to events

Working with local storage

Logging or analytics

Before Hooks, side effects were handled in class lifecycle methods like:

componentDidMount

componentDidUpdate

componentWillUnmount

useEffect replaces these lifecycle methods in functional components.

2. Basic Syntax
   import { useEffect } from "react";

useEffect(() => {
// side effect code here
});

Example:

import { useEffect } from "react";

function App() {
useEffect(() => {
console.log("Component rendered");
});

return <h1>Hello React</h1>;
}

📌 This runs after every render.

3. useEffect with Dependency Array

The dependency array controls when the effect runs.

Syntax
useEffect(() => {
// code
}, [dependencies]); 4. useEffect Cases
Case 1: Run on Every Render
useEffect(() => {
console.log("Runs every render");
});

Runs:

On first render

On every update

Case 2: Run Only Once (Component Mount)
useEffect(() => {
console.log("Runs once when component mounts");
}, []);

Runs:

Only once

Similar to componentDidMount

Example:

useEffect(() => {
fetch("https://api.example.com/users")
.then(res => res.json())
.then(data => console.log(data));
}, []);
Case 3: Run When Specific Value Changes
useEffect(() => {
console.log("Count changed");
}, [count]);

Runs when:

count changes

Example:

import { useState, useEffect } from "react";

function Counter() {
const [count, setCount] = useState(0);

useEffect(() => {
console.log("Count updated:", count);
}, [count]);

return (
<button onClick={() => setCount(count + 1)}>
Count: {count}
</button>
);
} 5. Cleanup Function in useEffect

Some effects need cleanup to prevent memory leaks.

Example:

Timers

Event listeners

Subscriptions

Syntax
useEffect(() => {
// effect code

return () => {
// cleanup code
};
}, []);

Example with Timer:

import { useEffect } from "react";

function Timer() {

useEffect(() => {

    const interval = setInterval(() => {
      console.log("Timer running");
    }, 1000);

    return () => {
      clearInterval(interval);
    };

}, []);

return <h1>Timer Example</h1>;
}

The cleanup runs when:

Component unmounts

Effect runs again

6. Real Example – Fetching API Data
   import { useState, useEffect } from "react";

function Users() {

const [users, setUsers] = useState([]);

useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));

}, []);

return (

<div>
<h2>User List</h2>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>

);
}

export default Users; 7. Multiple useEffect Hooks

You can use multiple effects for different logic.

useEffect(() => {
console.log("Component mounted");
}, []);

useEffect(() => {
console.log("Count updated");
}, [count]);

Benefits:

Better organization

Separation of concerns

8. Common Mistakes
1. Missing dependency

Bad ❌

useEffect(() => {
console.log(count);
}, []);

Correct ✔

useEffect(() => {
console.log(count);
}, [count]); 2. Infinite Loop

Bad ❌

useEffect(() => {
setCount(count + 1);
});

This causes infinite re-rendering.

9. useEffect Lifecycle Equivalent
   Class Lifecycle useEffect Equivalent
   componentDidMount useEffect(() => {}, [])
   componentDidUpdate useEffect(() => {}, [dependency])
   componentWillUnmount cleanup function
10. Best Practices

✅ Keep effects small and focused

✅ Use dependency array correctly

✅ Clean up timers and subscriptions

✅ Avoid unnecessary re-renders

11. Visual Flow of useEffect

Component Render → DOM Update → useEffect Runs

Flow:

Render Component
↓
DOM Updated
↓
useEffect Executes 12. Simple Practical Example
import { useState, useEffect } from "react";

function Example() {

const [count, setCount] = useState(0);

useEffect(() => {
document.title = `Count: ${count}`;
}, [count]);

return (

<div>
<h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>

);
}

This updates the browser tab title whenever count changes.

Quick Summary

useEffect is used for:

⚛️ Fetching APIs
⚛️ Working with timers
⚛️ DOM updates
⚛️ Event listeners
⚛️ Subscriptions
⚛️ Logging and analytics

✅ Key idea

useEffect = Handle side effects in React functional components

the useEffect Hook

real app fetch data from APIs, listen to browser events, start timers
store things in local storage & interact w external systems --side effects

user dashboard -----component
*fetch users from an API
*show loading states
*show errors if something goes wrong
*display user list \*\*
\*allow refreshing the user

UI-----------
title user dashboard
number of users
loading message when data is being fetched
error message
list of user names

1. Identify the visual states. What does the UI look like in each possible situation? (e.g., password hidden vs. password visible)
   ehat can the user see on the screen at different moments?

no users loaded yet .....title, 0, empty
users loading...... loading users TRI:when a fetch request starts
an error occurred TRI:when a fetch request fails
users successfully loaded & displayed TRI: when a fetch request finishes successfully

2. Decide what triggers state changes. Is it a button click? A key press? A form submission?

3. Represent that information in state. Use the simplest type possible - booleans for on/off, numbers for counts, strings for text.

users-> list of users []
loading -> boolean
error

4. Remove any state you do not actually need. Less state means fewer bugs.

5. Connect event handlers to update the state. Wire up the event to the setter.
