import {useEffect,useState} from "react";
//custom hook for checking if the device width is < 768 or not

const useWindowWidth = ()=>{
   const[width,setwidth] = useState(false);
   console.log("wiiiiidttthhh : ",width);

   useEffect(()=>{
     checkWindowWidth();
     window.addEventListener('resize',checkWindowWidth);

     return(()=>{
       window.removeEventListener('resize',checkWindowWidth);
     });

   },[]);

   const checkWindowWidth = ()=>{
         console.log("window size : ",window.innerWidth);
         setwidth(window.innerWidth < 768);
   }

   return width;
}

export default useWindowWidth;