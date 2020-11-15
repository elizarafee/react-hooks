import React, { useEffect, useState } from 'react'

function UseEffectComponent(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('reloaded');
        document.title = `Reloaded ${count} times`
    }, [count])

    return (
        <>
            <input type='txt' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
        </>
    )
}

export default UseEffectComponent;