import React from "react";
import useScrollToTop from "../customhooks/useScrollToTop";

const ScrollTop = ()=>{
    const [scroll] = useScrollToTop();
    return(
      <>
       <div style={{height : '300vh',width:'100vw'}}>
           <h1>Hello, Welcome to another page!!</h1>
       </div>
       <button onClick={scroll}>Scroll To Top</button>
      </>
    );
}

export default ScrollTop;