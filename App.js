import NavBar from './components/NavBar';
import Login from './components/Login';
import Slider from './components/Slider';

import { useState } from 'react';
import Counter from './components/Counter';

function App() {


  let [dataFromChild, setDataFromChild] = useState();
  let [count, setCount] = useState();

  let dataChildChanged = (data) => {
    setDataFromChild(data)
  }

  let counterHandler = (data) => {
    setCount(data);
  }
  return (
    <>
      <NavBar></NavBar>
      <p>Your input value: {dataFromChild}</p>
      <Login onDataChanged={dataChildChanged}></Login>
      <Counter onCounterChanged={counterHandler} />
      <Slider count={count} />
    </>
  );
}

export default App;
