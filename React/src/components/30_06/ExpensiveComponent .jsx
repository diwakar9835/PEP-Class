import { useMemo } from "react";

const ExpensiveComponent = ({ number }) => {
  const slowSquare = (num) => {
    console.log("Calculating square...");
    for (let i = 0; i < 1e9; i++) {}
    return num * num;
  };

//   const square = useMemo(() => slowSquare(number), [number]);

  return <div>Square of {number} is {slowSquare(number)}</div>;
};

export default ExpensiveComponent;