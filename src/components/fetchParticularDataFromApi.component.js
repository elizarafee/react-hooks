import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchParticularDataFromApi(props) {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id])

    return (
        <>
            <input type='txt' value={id} onChange={e => setId(e.target.value)}></input>
            {/* <button type='button' onClick={() => setPost}>Fetch Data</button> */}
            <div>
                {post.title}
            </div>
        </>
    )
}

export default FetchParticularDataFromApi