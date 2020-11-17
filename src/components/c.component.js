import React, { useContext } from 'react'
// import DComponent from './d.component'
import { nameContext, ageContext } from '../App'

export function CComponent(props) {
    const name = useContext(nameContext)
    const age = useContext(ageContext)

    return (
        <>
            <div>
                {name} - {age}
            </div>
        </>
    )
}

export default CComponent