import React,{useEffect} from "react";
import useClipboardCopy from "../customhooks/useCopyClipboard";


const Button = ({txt_id,getTxtValue})=>{
    //using the custom hook
    const[copied,copy_to_clipboard] = useClipboardCopy();
   

    const copy = async()=>{
        try{
          //calling the parent function
          const value = getTxtValue(txt_id);
        
            if(value.trim()){
                await copy_to_clipboard(value);
            }
            else{
                throw "cannot copy null values...";
            }
        }catch(e){
               window.alert(e);
        }
    }
    return(
        <>
       <button className="btn" onClick={copy}> {copied ? "Copied" : "Copy"} </button>
        </>
    )
}

const ClipboardCopy = ()=>{

    useEffect(()=>{
        console.log("clipboard...");
    });

    const getTxtValue = (id)=>{
       console.log("val : ",document.getElementById(id).value);
       return document.getElementById(id).value;
    }

   return(
       <>
       <textarea rows='10' cols='100' id="1" className="custom_textarea" value="Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag." readOnly/>
       <Button txt_id="1" getTxtValue={getTxtValue}/>
       <br/><br/>
       <textarea rows='10' cols='100' id="2" className="custom_textarea"  value="React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. " readOnly/>
       <Button txt_id="2" getTxtValue={getTxtValue}/>
       </>
   );
}

export default ClipboardCopy;
