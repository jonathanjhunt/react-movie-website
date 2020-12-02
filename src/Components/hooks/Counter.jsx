import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Clicked ${count} times`;
        return (() => console.log(`Final: ${count}`));
    });
    return (
        <>
            <p> You have clicked the button {count} times</p>
            <button onClick={() => setCount(count => count + 1)}>
                Click Me!
                </button>
        </>
    );

}
export default Counter;