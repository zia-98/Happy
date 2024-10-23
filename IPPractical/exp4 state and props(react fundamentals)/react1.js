import React,{useState} from 'react';
const CounterDisplay = ({count})=>{
return(
    <div>
        <h2>Counter Value:{count}</h2>
    </div>
);
};
const App = ()=>{
    const[counter,setCounter]=useState(0)
    const increaseCounter = ()=> {setCounter(counter + 1);
    };
    const decreaseCounter = ()=> {setCounter(counter - 1);
    };
    return (
        <div style={{textAlign:'center',padding:'20px'}}>
            <h1>React state and Props Example</h1>
            <CounterDisplay count={counter}/>
            <button onClick={increaseCounter}>increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    );
};
export default App;