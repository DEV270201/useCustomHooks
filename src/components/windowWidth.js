import React,{useEffect} from "react";
import useWindowWidth from "../customhooks/useWindowWidth";
//custom hook for checking if the device width is < 768 or not

const WindowWidth = ()=>{
   const smallDevice = useWindowWidth();

   useEffect(()=>{
     console.log("hello");
   },[smallDevice]);

   return(
       <>
       <h1>The size of the device is {smallDevice ? "Small" : "Not Small"}</h1>
       </>
   );
}

export default WindowWidth;