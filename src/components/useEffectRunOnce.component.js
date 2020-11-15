import React, { useEffect, useState } from 'react'

function UseEffectRunOnce(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('mouse cordinate is changed')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("reloaded")
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <>
            Mouse cordinate
            x: {x}, y :{y}
        </>
    )
}

export default UseEffectRunOnce;