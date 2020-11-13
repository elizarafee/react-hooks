import React, { useState } from 'react'

export function UseStateArray(props) {
    const [elements, setElement] = useState([])

    const addItem = () => {
        setElement([...elements, {
            id: elements.length,
            value: Math.floor(Math.random() * 10) + 1
        }]);
    }

    return (
        <>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {elements.map(element => (
                    <li key={element.id}>{element.value}</li>
                ))}
            </ul>
        </>
    )
}

export default UseStateArray;