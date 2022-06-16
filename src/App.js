import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

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
    setCurState((prev) => 'null')
  }

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);


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
            value={ (input/10955).toPrecision(2)}
            displayType={"text"}
            thousandSeparator={true}
          />
        ) : (
          <NumberFormat
            value={(preState/	10955).toPrecision(2)}
            displayType={"text"}
            thousandSeparator={true}
          />
        )}
        <input
          type='number'
          className="w-14 m-1 bg-transparent outline-0"></input>
        <p className="absolute top-0 right-0">USB</p>
      </div>
      <div className="flex pr-7 flex-wrap justify-center mr-2">
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">7</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">8</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">9</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">4</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">5</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">6</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">1</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">2</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">3</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">,</p>
        <p onClick={inputNum} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">0</p>
        <p onClick={clearStr} className="p-4 m-4 w-16 h-16 text-3xl cursor-pointer bg-slate-400 rounded-full flex justify-center items-center">C</p>
        <div className="m-5 w-full bg-slate-400 p-2 flex justify-center cursor-pointer items-center"> TO'LASH</div>
      </div>
    </div>
  );
}

export default App;
