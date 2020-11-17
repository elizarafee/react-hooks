import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchAllDataFromApi(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <ol>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ol>
        </>
    )
}

export default FetchAllDataFromApi