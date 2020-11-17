import React, { useReducer } from 'react'

    const initialValue = 0
    const reducer = (state, action) => {
        switch(action){
            case 'increament':
                return state + 1
            case 'decreament':
                return state - 1
            case 'reset':
                return initialValue
            default:
                return state
        }
    }

function UseReducer(props) {
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch('increament')}>Increament</button>
            <button onClick={() => dispatch('decreament')}>Decreament</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

export default UseReducer