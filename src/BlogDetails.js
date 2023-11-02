import React from 'react'
import { useParams } from 'react-router-dom'
import useCustomHook from "./useCustomHook";

function BlogDetails() {

    const { id } = useParams();
    const url = 'http://localhost:8000/blogs'
    const { blogs, pending, error } = useCustomHook(url + id)
    return (
        <div className='blogdetails'>
            {pending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written By {blogs.userId}</p>
                    <div>{blogs.body}</div>
                </article>
            )}
        </div>
    )
}

export default BlogDetails