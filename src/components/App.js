// import WindowWidth from "./WindowWidth";
import Counter from "./Counter";
import React,{useEffect,useState} from "react";
// import ClipboardCopy from "./ClipboardCopy";
// import {useRef} from "react";
// import ChildRef from "./ChildRef";
// import Fetch from "./Fetch";

function App() {
  // ref that is forwarded to the child component
  // const txt_ref = useRef(null);

  return (
    <div className="App">
      {/* <WindowWidth /> */}
      <Counter />
      {/* <ClipboardCopy /> */}
      {/* ----- */}
      {/* forwarding refs */}
      {/* <ChildRef ref={txt_ref} /> */}
      {/* <button onClick={()=> txt_ref.current.focus()}>Focus</button> */}
      {/* <button ref={txt_ref} onClick={()=> txt_ref.current.innerHTML=== "Hello" ? txt_ref.current.innerHTML = "Click" : txt_ref.current.innerHTML = "Hello"}>Click</button> */}
      {/* ----- */}
      {/* <Fetch /> */}
    </div>
  );
}

export default App;
