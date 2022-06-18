import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";


const BasaURL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".")
      return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };


  const clearStr = (e) => {
    setCurState((pre) => 'null')
  }

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ',', 0,]

  return (
    <div className="text-white rounded text-xl py-8 px-8 mt-10 max-w-md mx-auto bg-slate-600  shadow-lg space-y-2 sm:py-4  sm:space-y-0 sm:space-x-6">
      <div className="flex justify-between border-b-2 w-full relative">
        <p>UZB</p>
        {input !== "" || input === "0" ? (
          <NumberFormat
            className='ml-6'
            value={input}
            displayType={"text"}
            thousandSeparator={true}
          />
        ) : (
          <NumberFormat
            value={preState}
            displayType={"text"}
            thousandSeparator={true}
          />
        )}
        {input !== "" || input === "0" ? (
          <NumberFormat
            className='ml-6'
            value={(input / 10955).toPrecision(2)}
            displayType={"text"}
            thousandSeparator={true}
          />
        ) : (
          <NumberFormat
            value={(preState / 10955).toPrecision(2)}
            displayType={"text"}
            thousandSeparator={true}
          />
        )}
        <input
          className="w-14 m-1 bg-transparent outline-0"></input>
        <p className="absolute top-0 right-0">USD</p>
      </div>
      <div className="flex pr-7 flex-wrap justify-center mr-2">


        {numbers.map((i) =>
          <button onClick={inputNum}
            className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 
          rounded-full flex justify-center items-center">{i}</button>
        )}

        <button onClick={clearStr}
          className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 
          rounded-full flex justify-center items-center">C</button>
        <div className="m-5 w-full bg-slate-400 p-2 flex justify-center cursor-pointer items-center"> TO'LASH</div>
      </div>
    </div>
  );
}

export default App;
