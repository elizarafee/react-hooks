import React, { useState } from 'react'

function UseHook(props) {
    const [count, setCount] = useState(0);

    const increamentCount = () => {
        setCount(count+1);
    };
    
    return (
        <>
            {/* <button onClick={ () => setCount(count+1) }>{count}</button> */}
            <button onClick={ increamentCount }>{count}</button>
        </>
    )
}

export default UseHook;