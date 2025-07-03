import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#333",
    padding: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "8px 16px",
    fontSize: "18px",
    transition: "background-color 0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#575757",
    borderRadius: "5px",
  };

  return (
    <div style={navbarStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#575757")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        Home
      </Link>
      <Link
        to="/contact"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#575757")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        Contact
      </Link>
      <Link
        to="/weather"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#575757")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "")}
      >
        Weather
      </Link>
    </div>
  );
};

export default NavBar;
