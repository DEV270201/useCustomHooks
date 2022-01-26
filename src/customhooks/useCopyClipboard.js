import { useEffect, useState } from "react";
//custom hook for copying data into the clipboard
//The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.

const useClipboardCopy = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        console.log("Trying to copy the data into the clipboard");
    }, []);

    const copy_to_clipboard = async (val) => {
        try {
            //copying to clipboard using clipboard API is asynchronous
            const cb = navigator.clipboard;
            await cb.writeText(val);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        } catch (err) {
            console.log("Err : ", err);
            return;
        }
    }

    return [copied, copy_to_clipboard];
}

export default useClipboardCopy;