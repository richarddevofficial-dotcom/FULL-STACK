import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // get current year dynamically

  return (
    <footer className="footer">
      <p>&copy; {currentYear} My React Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
