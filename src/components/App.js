// import WindowWidth from "./WindowWidth";
// import Counter from "./Counter";
import React from "react";
// import ClipboardCopy from "./ClipboardCopy";
// import ScrollToTop from "./ScrollToTop";
// import ScrollTop from "./ScrollTop";
// import Fetch from "./Fetch";
// import { BrowserRouter,Route,Routes } from "react-router-dom";  //in version 6 switch -> routes and component/render -> element
import { useEffect } from 'react';
// import Page from "./Page";

const App = ()=> { 

    useEffect(()=>{
       console.log("App.js");
    });

  return (
    <div className="App">

    {/* for useWindowWidth */}
      {/* <WindowWidth /> */}

    {/* for useCounter */}
      {/* <Counter /> */}
    
    {/* for useScrollToTop */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ScrollToTop />} />
          <Route path="/another" exact element={<ScrollTop />} />
        </Routes>
      </BrowserRouter> */}

    {/* for useClipboardCopy */}
      {/* <ClipboardCopy /> */}

    {/* for useFetch */}
      {/* <Fetch /> */}

    {/* for usePercent */}
      {/* <Page /> */}

    </div>
  );
}

export default App;
