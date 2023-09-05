import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Service } from '../getPosts/getPosts'
import { useFetching } from '../OwnHooks/useFetching'
const Post = () => {
    const [post, setPost] = useState({})
    const getId = useParams();

    const [getElement, isLoading, error] = useFetching(async () => {
        const postCurrent = await Service.getCurrentPost(getId.id)
        setPost(postCurrent)
    })

    useEffect(async () => {
        getElement()
    }, [])

    return (
        <div style={{margin: '20px 0 0 30px'}}>
            <h1>Post number {post.id}</h1>
            <p><h1>Title:</h1> &ensp;<h3>{post.title}</h3></p>
            <p><h1>Body:</h1> &ensp;<h3>{post.body}</h3></p>
        </div>
    )
}
export default Post
