import React,{useEffect} from 'react';
import useFetch from '../customhooks/useFetch';
import Url from "../data";

const Fetch = ()=> {
    const[data] = useFetch(Url);

    useEffect(()=>{
        console.log("use fetch");
    });

    return (
     <>
     {
       data.length !==0 ? data.map((e,key)=>{
          return <p key={key}>{e.title}</p>
       }) : 
       <h3>Loading...</h3>
     }
     </>
    )
}

export default Fetch;
