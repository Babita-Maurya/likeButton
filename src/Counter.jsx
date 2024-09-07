import {useState} from "react";

export default function Counter(){
  let [count, setCount] = useState(0);
  console.log("Component is rendered");
  console.log(`count = ${count}`);
  let incCount=()=>{

    setCount((currValue)=>{
      return currValue+1;
    })
    setCount((currValue)=>{
      return currValue+1;
    })
    setCount((currValue)=>{
      return currValue+1;
    })
  }; 

  return(
    <>
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
    </>
  );
}