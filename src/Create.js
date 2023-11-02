import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('gilbert');
    const navigate = useNavigate();


    const handleform = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            navigate('/');
        })
    }
    return (
        <div className='create'>
            <h2>Add New Blog</h2>
            <form onSubmit={handleform}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body</label>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value="gilbert">Gilbert</option>
                    <option value="fredrick">Fredrick</option>
                </select>
                <button>Add Blog</button>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create