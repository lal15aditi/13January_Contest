import React, {useState} from 'react'

function App() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');

  const [ans, setAns] = useState(null);

  const [msg, setMsg] = useState(null);

  const getResult = (result) => {
    if(!n1) {
      setAns('Num 1 Cannot Be Empty')
      setMsg('Error')
    }
    else if(!n2) {
      setAns('Num 2 Cannot Be Empty')
      setMsg('Error')
    }
    else if(isNaN(Number(n1))) {
      setAns('Num 1 should be either integer, floating-point, positive or negative')
      setMsg('Error')
    }
    else if(isNaN(Number(n2))) {
      setAns('Num 2 should be either integer, floating-point, positive or negative')
      setMsg('Error')
    }
    else {
      setAns('Result - ' + result)
      setMsg('Success')
    }
  }

  return (
    <div className="main">
      <h2>React Calculator</h2>
      <input type="text" placeholder="Num 1" value={n1} onChange={(e) => {setAns(null); setN1(e.target.value)}}/>
      <input type="text" placeholder="Num 2" value={n2} onChange={(e) => {setAns(null); setN2(e.target.value)}}/>
      <div className="operators">
        <button onClick={() => getResult(Number(n1) + Number(n2))}>+</button>
        <button onClick={() => getResult(Number(n1) - Number(n2))}>-</button>
        <button onClick={() => getResult(Number(n1) * Number(n2))}>*</button>
        <button onClick={() => getResult(Number(n1) / Number(n2))}>/</button>
      </div>
      {
        ans && (
          <>
            <div className={`${msg}`}>{msg}!</div>
            <div className="answer">{ans}</div>
          </>
        )
      }
    </div>
  );
}

export default App;
