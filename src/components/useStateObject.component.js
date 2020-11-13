// useState doesn't automatically marge and update the object that's why we need to use spread operator to automatically marge and update by use state

import React, { useState } from 'react'

function UseStateObject(props) {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <>
            <form>
                <input
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}>
                </input>
                First Name: {name.firstName}
                <br></br>
                <input 
                    value={name.lastName} 
                    onChange={e => setName({ ...name, lastName: e.target.value })}>
                </input>
                Last Name: {name.lastName}
            </form>
        </>
    )
}

export default UseStateObject;