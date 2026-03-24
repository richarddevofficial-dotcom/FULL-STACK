import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
