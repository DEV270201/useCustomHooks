import {useState} from 'react'

const useCounter = (num = 0)=> {
  const[cnt,setCnt] = useState(num);

  const Increment = ()=>{
      setCnt(cnt+1);
  }

  const Decrement = ()=>{
      if(cnt){
          setCnt(cnt-1);
      }
  }

  return {cnt,Increment,Decrement};
}

export default useCounter;
