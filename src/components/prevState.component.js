import React, { useState } from 'react'

function PrevState(props) {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const decreamentCount = () => {
        setCount (count-1);
    }

    const increamentFive = () => {
        setCount (count+5);
    }

    const decreamentFive = () => {
        for(let i=1; i<=5; i++){
            setCount( prevCount => prevCount - 1);
        }
    }

    return (
        <>
            Count : {count}
            <button onClick={() => setCount(initialCount) } >Reset</button>
            <button onClick={() => setCount(count+1) } >Increament</button>
            <button onClick={ decreamentCount } >Decreament</button>
            <button onClick={ increamentFive } >Increament by Five</button>
            <button onClick={ decreamentFive } >Decreament by Five</button>
        </>
    )
}

export default PrevState;