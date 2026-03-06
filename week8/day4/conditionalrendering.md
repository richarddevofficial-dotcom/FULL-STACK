Conditional Rendering in React
1️⃣ Definition

Conditional Rendering in React means displaying different UI elements or components depending on a condition.

React uses JavaScript conditions to decide what should appear in the UI.

In simple terms:

If condition is true → show something
If condition is false → show something else

Example:

User logged in → Show Dashboard
User not logged in → Show Login Page
2️⃣ Why Conditional Rendering is Important

It allows applications to:

Show or hide content dynamically

Control UI based on user actions

Display loading states

Show error messages

Control authentication pages

Example uses:

Show login button if user not logged in
Show admin panel if user is admin
Show loading spinner while data loads
3️⃣ Methods of Conditional Rendering in React

There are several ways to implement conditional rendering.

1️⃣ Using if Statement

This is the basic JavaScript method.

function Greeting({ isLoggedIn }) {
if (isLoggedIn) {
return <h1>Welcome back!</h1>;
}

return <h1>Please log in</h1>;
}

Usage:

<Greeting isLoggedIn={true} />

Output:

Welcome back!
2️⃣ Using Ternary Operator

The ternary operator is the most commonly used method.

Syntax:

condition ? trueResult : falseResult

Example:

function Status({ isOnline }) {
return (
<p>
{isOnline ? "User is Online" : "User is Offline"}
</p>
);
}

Output:

User is Online
3️⃣ Using Logical AND (&&)

This is used when you want to render something only if the condition is true.

Example:

function Notification({ hasMessage }) {
return (
<div>
{hasMessage && <p>You have new messages</p>}
</div>
);
}

Meaning:

If hasMessage = true → show message
If false → show nothing
4️⃣ Conditional Rendering with Variables

You can also store JSX in variables.

Example:

function LoginStatus({ loggedIn }) {

let message;

if (loggedIn) {
message = <h2>Welcome User</h2>;
} else {
message = <h2>Please Login</h2>;
}

return <div>{message}</div>;
}
5️⃣ Conditional Rendering with Components

You can render different components based on a condition.

Example:

function Dashboard() {
return <h2>Dashboard</h2>;
}

function Login() {
return <h2>Login Page</h2>;
}

function App({ isLoggedIn }) {
return (
<>
{isLoggedIn ? <Dashboard /> : <Login />}
</>
);
}
6️⃣ Real World Example (University System)

Example: Student Portal

function StudentPortal({ isRegistered }) {
return (
<div>
{isRegistered
? <h2>Access your courses</h2>
: <h2>Please register for courses</h2>}
</div>
);
}
7️⃣ Conditional Rendering with Loading State

Example when fetching API data:

function DataComponent({ loading }) {
return (
<div>
{loading ? <p>Loading...</p> : <p>Data loaded</p>}
</div>
);
}
8️⃣ Example Summary
Method Usage

---

if statement Large conditions
Ternary operator Two choices
&& operator Show element if true
Variable rendering Complex UI logic
Component rendering Show different components
9️⃣ Best Practices

✔ Keep conditions simple and readable
✔ Use ternary for small conditions
✔ Use if statements for complex logic
✔ Avoid deeply nested conditions

🔟 Example Combined with map()

Example showing conditional UI inside lists:

const students = [
{ id: 1, name: "John", passed: true },
{ id: 2, name: "Sarah", passed: false }
];

function StudentList() {
return (
<div>
{students.map(student => (
<p key={student.id}>
{student.name} -
{student.passed ? " Passed" : " Failed"}
</p>
))}
</div>
);
}

✅ Conclusion

Conditional Rendering in React allows developers to control what appears in the UI based on conditions, using JavaScript logic such as if, ternary operators, and logical &&.
