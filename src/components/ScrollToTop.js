import React from "react";
import useScrollToTop from "../customhooks/useScrollToTop";

const ScrollToTop = ()=>{
    const [scroll] = useScrollToTop();
    return(
      <>
       <div style={{height : '300vh',width:'100vw'}}>
           <h1>Hello, I am using Custom Hooks!</h1>
       </div>
       <button onClick={scroll}>Scroll To Top</button>
      </>
    );
}

export default ScrollToTop;