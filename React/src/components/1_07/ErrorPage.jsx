import React from "react";

const ErrorPage = () => {
  const errorPageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
    color: "#333",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "6rem",
    fontWeight: "bold",
    color: "#e74c3c",
  };

  const messageStyle = {
    fontSize: "1.5rem",
    color: "#555",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2980b9",
  };

  return (
    <div style={errorPageStyle}>
      <div style={titleStyle}>Page Not Found</div>
      <div style={messageStyle}>
        Oops! The page you are looking for does not exist.
      </div>
      <button
        style={buttonStyle}
        onClick={() => (window.location.href = "/")}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
