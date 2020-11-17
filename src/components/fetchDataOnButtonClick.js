import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchDataOnButtonClick(props) {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [idFromButtonClick])

    return (
        <>
            <input type='txt' value={id} onChange={e => setId(e.target.value)}></input>
            <button type='button' onClick={handleClick}>Fetch Data</button>
            <div>
                {post.title}
            </div>
        </>
    )
}

export default FetchDataOnButtonClick