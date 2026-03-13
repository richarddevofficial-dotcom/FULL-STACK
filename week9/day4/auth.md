WEEK09DAY04
build contolled inputs in react
Handle user input using onChange
Submit forms using onSubmit
Prevent page reload using preventDefault
Manage multiple form fields using a single state object
Validate login inputs
Display validation errors in the UI
Reset form state after submission
Understand why libraries like React Hook Form exi

import { useState } from "react";

function EmailInput() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); // new state for password

return (
<div>
<h4>LOG IN</h4>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </label>

      <label style={{ display: "block", marginTop: "10px" }}>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </label>

      <p>User's email is: {email}</p>
      <p>User's password is: {password}</p>
    </div>

);
}

export default EmailInput;
