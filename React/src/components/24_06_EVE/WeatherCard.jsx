
import React from "react";

const WeatherCard = ({ data }) => {
  const {
    current: {
      condition: { icon, text },
      humidity,
    },
    location: { name, country },
  } = data;

  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        color: "#333",
        width: "300px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: "10px 0" }}>{name}, {country}</h2>
      <img src={icon} alt="weather-icon" />
      <h3 style={{ margin: "10px 0" }}>{text}</h3>
      <p><strong>Humidity:</strong> {humidity}%</p>
    </div>
  );
};

export default WeatherCard;

