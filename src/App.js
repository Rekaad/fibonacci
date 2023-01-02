import { useState } from 'react';
import './App.css';

function App() {

  const [liczba,setLiczba] = useState('');
  const [wynik, setWynik] = useState('');

 function oblicz(e){
  const fibo = [0,1];

  for(var i = 2;i<=e;i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  setWynik(fibo[e])
  console.log(fibo[e]);
 }


  return (
    <div className="App">
      <div>
        <h1>Obliczanie elementów ciągu Fibonacciego</h1>
        <h4>Podaj numer elementu: </h4>
        <input type="text" id='number' onChange={(e)=>{setLiczba(e.target.value)}}/>
        <br/>
        <button onClick={()=> {oblicz(liczba)}}>Oblicz</button>
      </div>
     <div> Wartość ciągu dla podanego elementu to: {wynik}</div><br/>
     <div> Kalkulator Fibonacciego <br/> Radosław Młynek <br/> IMST 2.1/3</div>
    </div>
  );
}

export default App;
