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
