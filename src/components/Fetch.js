import React,{useEffect} from 'react';
import useFetch from '../customhooks/useFetch';
import Url from "../data";

const Fetch = ()=> {  
  const[data,error] = useFetch(Url);

    useEffect(()=>{
        console.log("use fetch");
    },[]);

    return (
     <>
      {data.length !==0 && data.data.map((e,key)=>{
          return <p key={key}>{e.title}</p>
       })}
      {error && <h3>{error}</h3>}
     </>
    )
}

export default Fetch;
