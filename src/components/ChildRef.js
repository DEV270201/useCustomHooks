import React,{forwardRef} from 'react'

// use forward ref method in react for forwarding refs to the child
const ChildRef = forwardRef((props,ref)=> {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
});

export default ChildRef;


// App.js
  {/* ----- */}
      {/* forwarding refs */}
      {/* <ChildRef ref={txt_ref} /> */}
      {/* <button onClick={()=> txt_ref.current.focus()}>Focus</button> */}
      {/* <button ref={txt_ref} onClick={()=> txt_ref.current.innerHTML=== "Hello" ? txt_ref.current.innerHTML = "Click" : txt_ref.current.innerHTML = "Hello"}>Click</button> */}
      {/* ----- */}
