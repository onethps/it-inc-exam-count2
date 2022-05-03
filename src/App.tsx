import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import SettingPage from "./SettingPage";

function App() {

  const [count, setCount] = useState<number>(0);


  const [scount, ssetCount] = useState<number>(0);
  const [fdf, xczsa] = useState<number>(0);

//nene bratit, eto moya stroka
  const [startNumber, setStartNumber] = useState<number>(0)
  const [lastNumber, setLastNumber] = useState<number>(0)


  //errors input check
  let [maxError, setMaxError] = useState<boolean>(false)
  let [startError, setStartError] = useState<boolean>(false)


  return (

<div className='appBlock'>

  <SettingPage
      count={count}
      startNumber={startNumber}
      setStartNumber={setStartNumber}
      setCount={setCount}
      lastNumber={lastNumber}
      setLastNumber={setLastNumber}
      maxError={maxError}
      startError={startError}
      setMaxError={setMaxError}
      setStartError={setStartError}


  />

    <Counter
        count={count}
        setCount={setCount}
        maxError={maxError}
        startError={startError}
        lastNumber={lastNumber}
        setStartNumber={setStartNumber}
        setLastNumber={setLastNumber}


    />



</div>

  )
}

export default App;
