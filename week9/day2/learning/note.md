Rendering Arrays in React using map()

In React, rendering a list of items is done using JavaScript’s map() method. This lets you loop through an array and return JSX for each item.

1️⃣ Basic Example

Suppose you have an array of names:

const names = ["Alice", "Bob", "Charlie"];

You can render it like this:

function NameList() {
return (
<ul>
{names.map((name) => (
<li>{name}</li>
))}
</ul>
);
}

Output:

Alice

Bob

Charlie

✅ Each item in the array is converted into an <li> element.

2️⃣ Using map() with Index

You can access the index of each item:

<ul>
  {names.map((name, index) => (
    <li key={index}>
      {index + 1}. {name}
    </li>
  ))}
</ul>

Output:

Alice

Bob

Charlie

3️⃣ Importance of key Prop

React needs a unique key for each item in a list.

This helps React identify items for efficient re-rendering.

<ul>
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
</ul>

⚠️ Best Practice:

Use a unique id if available, not the index.

Using index is okay only if items don’t change.

const users = [
{ id: 101, name: "Alice" },
{ id: 102, name: "Bob" },
{ id: 103, name: "Charlie" }
];

<ul>
  {users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
4️⃣ Rendering Complex Components

You can render components inside map():

function UserCard({ user }) {
return (
<div className="user-card">
<h3>{user.name}</h3>
<p>Email: {user.email}</p>
</div>
);
}

function UserList() {
const users = [
{ id: 1, name: "Alice", email: "alice@gmail.com" },
{ id: 2, name: "Bob", email: "bob@gmail.com" },
];

return (
<div>
{users.map((user) => (
<UserCard key={user.id} user={user} />
))}
</div>
);
}

✅ This is how real apps render dynamic lists.

5️⃣ Conditional Rendering Inside Map

You can filter or conditionally render items:

const numbers = [1, 2, 3, 4, 5];

<ul>
  {numbers.map((num) => num % 2 === 0 && <li key={num}>{num}</li>)}
</ul>

Output:

2

4

6️⃣ Tips and Best Practices

Always use a unique key prop.

Don’t modify state directly inside map. Use setState if you need to update.

For arrays of objects, use id instead of index for keys.

You can nest maps for arrays inside arrays (like tables).

Keep the JSX inside map() small and reusable, often by creating a component.

✅ Summary

map() converts an array into JSX elements.

Each element must have a key prop.

Works with strings, numbers, objects, or even components.

Combined with conditional rendering, it’s very powerful.

// function Student(){
// const software = students.filter(
// (student) => student.track === "Software Engineering"
// );

// return (
// <ol>
// {software.map((student) => (
// <li key={student.id}>
// {student.name}: {student.track}
// </li>
// ))}
// </ol>
// );
// }

// export default Student
