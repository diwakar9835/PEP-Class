import { useContext, useState } from "react";
import { themeDetail } from "./ContextThemeProvider.jsx";
import Todo from "./components/25_06/Todo.jsx";
import ExpensiveComponent from "./components/30_06/ExpensiveComponent .jsx";

const App = () => {
  const data = useContext(themeDetail);
  const { name } = data;

  const [number, setNumber] = useState(2);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Theme: {data.theme}</h1>
      <p>Name: {name}</p>
      <button
        onClick={() => data.setTheme(data.theme === "light" ? "dark" : "light")}
      >
        Change Theme
      </button>
      <ExpensiveComponent number={number} />
      <button onClick={() => setNumber((prev) => prev + 1)}>
        Increment Number
      </button>

      {/* <Todo /> */}
    </div>
  );
};

export default App;
