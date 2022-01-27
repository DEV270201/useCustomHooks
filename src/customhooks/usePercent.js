import {useState,useEffect} from "react";

// custom hook that indicates how much % you have scrolled the page

const usePercent = ()=>{
    const [load,setLoad] = useState(0);
    useEffect(()=>{
        const listener = () => {
            let percentage = Math.floor((window.pageYOffset) / (document.body.offsetHeight - window.innerHeight) * 100);
            setLoad(percentage);
          }
          window.addEventListener("scroll", listener);
      
          //for cleaning purposes
          return (() => {
            window.removeEventListener("scroll", listener);
          });
    },[]);

    return { load };
}

export default usePercent;