import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>
                <p>Counter = { counter }</p>
                <button onClick={ () => setCounter(counter + 1) }>
                    Add One
                </button>
            </div>
        </div>
    );
}