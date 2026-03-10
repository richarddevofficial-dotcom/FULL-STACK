import { useState } from "react";

function RegistrationForm() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Additional states
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // <-- new state

  // Form validation
  const isFormValid = name && email && password;

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store submitted data
    setSubmittedData({ name, email, password });

    // Show success message
    setSuccessMessage("Registration successful!");

    // Clear inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="toggle-btn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" disabled={!isFormValid} className="submit-btn">
          Register
        </button>
      </form>

      {/* Success Message */}
      {successMessage && <p className="success">{successMessage}</p>}

      {/* Live Preview */}
      <div className="preview">
        <h2>Live Preview</h2>
        <p>
          <strong>Name:</strong> {submittedData ? submittedData.name : name}
        </p>
        <p>
          <strong>Email:</strong> {submittedData ? submittedData.email : email}
        </p>
        <p>
          <strong>Password:</strong>{" "}
          {submittedData ? submittedData.password : password}
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
