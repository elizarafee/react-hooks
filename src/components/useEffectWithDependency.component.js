import React, { useState, useEffect } from 'react'

function UseEffectWithDependency(props) {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)  

        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <>
            <h3> {count} </h3>
        </>
    )
}

export default UseEffectWithDependency