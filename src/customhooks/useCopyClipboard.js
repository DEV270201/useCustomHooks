import { useEffect, useState } from "react";
//custom hook for copying data into the clipboard

const useClipboardCopy = () => {
    const [copied, setCopied] = useState(false);
    //    const textRef = useRef();

    useEffect(() => {
        console.log("Trying to copy the data into the clipboard");
    }, []);

    const copy_to_clipboard = async (ref) => {
        try {
            if (ref.current == null) {
                throw "Null Html element is passed!!";
            }
            //copying to clipboard using clipboard API is asynchronous
            const cb = navigator.clipboard;
            // await cb.writeText(document.querySelector(".custom_textarea").innerHTML);
            await cb.writeText(ref.current.value);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        } catch (err) {
            console.log("Err : ", err);
        }
    }

    return [copied, copy_to_clipboard];
}

export default useClipboardCopy;