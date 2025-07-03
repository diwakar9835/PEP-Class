import { useState } from "react";
import Test from "./Test";
import CustomButton from "./CustomButton";
import { Outlet } from "react-router-dom";

function Demo(prop) {
  console.log(prop);
  const name = "TEST NAME";
  var ans = 0;

  const [sum, setSum] = useState(prop?.data?.name);

  //   console.log(sum);

  const addVal = () => {
    ans = ans + 10;
    // console.log(ans);
    setSum(sum + 1);
  };

  //   console.log("Demo is rendered");
  return (
    <>
      <h1>Hello {name}</h1>
      <div>{sum}</div>
      <Outlet />
      <Test />
      {/* <button onClick={addVal}>Click Me</button> */}

      <CustomButton buttonData={{ name: "Submit", color: "green" }} />
      {/* <CustomButton name="Submit" color="green" />
      <CustomButton name="Submit" color="red" />
      <CustomButton name="Submit" color="yellow" />
      <CustomButton name="Submit" color="sky" />
      <CustomButton name="Submit" color="magwenta" /> */}
    </>
  );
}

export default Demo;
