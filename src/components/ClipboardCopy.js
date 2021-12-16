import React,{useRef} from "react";
import useClipboardCopy from "../customhooks/useCopyClipboard";

const ClipboardCopy = ()=>{
  
    const[copied,copy_to_clipboard] = useClipboardCopy();

    const textRef = useRef(null);

    const copy = async()=>{
        await copy_to_clipboard(textRef);
    }
   return(
       <>
       <textarea rows='10' cols='100' ref={textRef} className="custom_textarea" value="Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag." readOnly/>
       <button className="btn" onClick={copy}> {copied ? "Copied" : "Copy"} </button>
       </>
   );
}

export default ClipboardCopy;