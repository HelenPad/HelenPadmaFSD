import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>My Blog &copy; {new Date().getFullYear()}</p>
      <p>Contact: contact@myblog.com</p>
    </footer>
  );
};

const footerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
};

export default Footer;
