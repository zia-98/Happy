import React,{useState} from 'react';
function ClickHandlerComponent() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Click counter</h1>
            <button onClick={handleClick}>Click me</button>
            <p>You clicked {count} times</p>
        </div>
    );
}
export default ClickHandlerComponent;