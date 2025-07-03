import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherComponent = () => {
  const [input, setInput] = useState("india");
  const [data, setData] = useState(null);
  const [arr, setArr] = useState([]);
  const apiKey = "cc0c6f2482424f69bd874449252406";

  const addToArray = () => {
    let newArr = [...arr];
    newArr.push(input);
    setArr(newArr);
  }

  async function apiDataCall() {
    const jData = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`
    );
    const data = await jData.json();
    setData(data);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        type="text"
        value={input}
        placeholder="Enter city"
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", marginRight: "10px" }}
      />
      <button
        onClick={() => {
          apiDataCall();
          addToArray();
        }}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#4a90e2",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {data && <WeatherCard data={data} />}


      {
        arr.map((item) => {
          return(
            <p>{item}</p>
          )
        })
      }
    </div>
  );
};

export default WeatherComponent;
