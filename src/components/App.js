// import WindowWidth from "./WindowWidth";
// import Counter from "./Counter";
import React from "react";
import ClipboardCopy from "./ClipboardCopy";
// import ScrollToTop from "./ScrollToTop";
// import ScrollTop from "./ScrollTop";
// import Fetch from "./Fetch";
// import { BrowserRouter,Route,Routes } from "react-router-dom";  //in version 6 switch -> routes and component/render -> element

function App() { 

  return (
    <div className="App">
      {/* <WindowWidth /> */}
      {/* <Counter /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ScrollToTop />} />
          <Route path="/another" exact element={<ScrollTop />} />
        </Routes>
      </BrowserRouter> */}
      <ClipboardCopy />
      {/* <ScrollToTop /> */}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
