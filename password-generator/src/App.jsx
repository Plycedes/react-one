import { useState, useCallback } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [iNum, setINum] = useState(false);
    const [iChar, setIChar] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (iNum) str += "1234567890";
        if (iChar) str += "!@#$%^&?*";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, iNum, iChar, setPassword]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
                <h1 className="text-4xl text-center">Password Generator</h1>
                <br />
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="password"
                        readOnly
                    />
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
                        copy
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;

