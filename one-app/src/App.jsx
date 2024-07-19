import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
    };

    const subValue = () => {
        setCounter(counter - 1);
    };
    return (
        <>
            <h2>Value: {counter}</h2>
            <button onClick={addValue}>Increase</button>
            <br />
            <br />
            <button onClick={subValue}>Decrease</button>
        </>
    );
}

export default App;

