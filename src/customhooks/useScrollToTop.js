//this is the custom hook for scrolling the page to the top
import { useEffect } from "react";
const useScrollToTop = ()=>{

   useEffect(()=>{
     console.log("window : ",window.document.body);
   });

   const scroll = ()=>{
           window.scroll({
               top: 0,
               left : 0,
               behavior : "smooth"
           });
   }

   return [scroll];
}

export default useScrollToTop;