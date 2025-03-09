import { useState } from 'react'

function App() {
  const [count, setCount] = useState(15); //https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js
  
  const upper = () => {
    if (count < 20) {                      
      setCount(count + 1);
    }
  };

  const lower = () => {
    if (count > 0) {                      
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Value {count}</h1>
      <button onClick={upper}>Upper</button>  
      <br /><br />
      <button onClick={lower}>Upper</button>  
    </>
  );
}

export default App
