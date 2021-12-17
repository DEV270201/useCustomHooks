import React,{useEffect} from 'react';
import useCounter from '../customhooks/useCounter';

const Counter = ()=> {
    console.log("abcdef");
    const {cnt,Increment,Decrement} = useCounter();

    useEffect(()=>{
         console.log("Counter");
    });

    return (
        <>
          <button onClick={Increment}>+</button>
           {cnt}
          <button onClick={Decrement}>-</button>
        </>
    )
}

export default Counter;
