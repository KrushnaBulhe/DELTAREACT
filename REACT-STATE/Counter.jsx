

import { useState} from "react";

function init(){
  return Math.random();
}

export default function Counter(){
    let [count , setCount] = useState(init) ;   //initial value set to at any random value , init is just called once on re-rendering , it was passed as a ref here
    
    let incCount = () => {
      // setCount((currCount) => {  //next value of count depends on initial value
      //   return currCount + 1 ;
      // });
      // setCount((currCount) => {
      //   return currCount + 1 ;  
      // });

      setCount(count+1);   // re rendering is ocuurs
      // setCount(25); //here re-rendering is not done always as it not changes on every click
    }

    return (
      <div>
        <h3>count = {count}</h3>
        <button onClick={incCount}>increase count</button>
      </div>
    );
}