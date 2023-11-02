import React from 'react'
import { Link } from 'react-router-dom';

function BlogList(props) { //I failled to Destructure the props Directly inside the parentheses of the bloglist component So I had 2 receive them then store as Variable 
    const blogs = props.passingBlogs;
    const title = props.title;
    // const handleDelete = props.deletingBlog;
    return (
        <div className='blog-list'>
            <h4>{title}</h4>
            {blogs.map((newBlogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${newBlogs}`}>
                        {/* <h2>{newBlogs.title}</h2> */}
                        {/* <p> Written By {newBlogs.body}</p> */}
                        {/* <button onClick={() => handleDelete(blogs.id)}>Delete</button> */}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList