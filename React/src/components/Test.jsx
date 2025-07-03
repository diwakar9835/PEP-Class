import React, { useEffect } from "react";

const Test = () => {
//   console.log("Test is getting rerendered");s
  const [count, setCount] = React.useState(0);

  console.log("Test is rendered");

  useEffect(() => {
    console.log("useEffect is called");
  }, []);


    console.log("Test is after useeffect rendered");

  function apiDataCall() {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // setCount(data);
        console.log(data);
      });
  }
  
//   apiDataCall();

  function add() {
    setCount(count + 1);
  }

//   setCount(count + 1);
  return <div>
    <button onClick={add}>Click Me</button>
  </div>;
};

export default Test;
