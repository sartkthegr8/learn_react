// import logo from './logo.svg';
import './App.css';
import {  useState} from 'react';


function App() {

  // let counter = 0;
  const [counter, setcounter] = useState(0);

  const addValue =()=>{
    setcounter(counter+1)
    console.log(counter);
  }
  const subValue =()=>{
    setcounter(counter-1)
    console.log(counter);
  }

  return (
   <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button
      onClick={addValue}
    >Add value</button>

    <br/>

    <button
      onClick={subValue}
    >remove value</button>
   </>
  );
}

export default App;
