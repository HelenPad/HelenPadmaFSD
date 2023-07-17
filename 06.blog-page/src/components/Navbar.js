import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <img src="" alt="Blog Logo" style={logoImgStyle} />
        <span style={logoTextStyle}>My Blog</span>
      </div>
      <div style={linksStyle}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/blog" style={linkStyle}>
          Blog
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
      </div>
      <div style={searchStyle}>
        <input type="text" placeholder="Search..." style={inputStyle} />
        <button style={buttonStyle}>Search</button>
      </div>
    </nav>
  );
};

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  background: "#333",
  color: "#fff",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
};

const logoImgStyle = {
  height: "30px",
  marginRight: "0.5rem",
};

const logoTextStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
};

const linksStyle = {
  display: "flex",
  alignItems: "center",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.5rem 1rem",
};

const searchStyle = {
  display: "flex",
  alignItems: "center",
};

const inputStyle = {
  padding: "0.5rem",
  marginRight: "0.5rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  background: "transparent",
  border: "1px solid #fff",
  color: "#fff",
  cursor: "pointer",
};

export default Navbar;
