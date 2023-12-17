// import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';

function App() {

  const myObj = {
    userName :"sarthak",
    age : 24
  }

  return (
    // <h1 className="text-3xl bg-green font-bold underline">
   <div>

   <h1 className='text-5xl 
   font-bold
   bg-slate-500'>
   Hello world!
   </h1>

   <Card name ="rina" disc = "hello ji" object={myObj} />
   <Card name ="sheema" disc = "bddkkdk"/>
   

   </div>
  );
}

export default App;
