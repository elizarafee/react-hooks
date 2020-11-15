import React, { useEffect, useState } from 'react'

function UseEffectComponent(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Reloaded ${count} times`
    })

    return (
        <>
            <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
        </>
    )
}

export default UseEffectComponent;