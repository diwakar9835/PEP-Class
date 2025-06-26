import { useState} from "react";
import Demo from "./components/Demo"

function App() {
    const name = "TEST NAME";
    var ans = 0;

    const [sum, setSum] = useState(0);

    console.log

    const addVal = () => {
        ans = ans + 10;
        console.log(ans);
    }
    console.log("App is rendered");
    return (
        <>
        <h1>Hello {name}</h1>
        <div>{ans}</div>
        <Demo />
        <button onClick={addval}>Click Me</button>
        </>
    )
}

export default App