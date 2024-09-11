import React, {useState} from "react";
 
const StateComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>State Component</h3>
            <button onClick={() => setCount((count + 1))}>+</button>
            <button onClick={() => setCount((count - 1))}>-</button>
            <p>Count: {count}</p>
        </div>
    );
}; 

export default StateComponent;