import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getPost = async () => {
            try {
                setError('');
                setIsLoading(true);
                const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

                if(!responce.ok) {
                    throw new Error('Failed to fetch'); 
                }

                const data = await responce.json();
                setPost(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
            
        }
        getPost();
    }, [postId])
    return (
        <div>
            {error && <h1>{error}</h1>}
            {isLoading ? <h1>Loading...</h1> : <div><h2>{post.title}</h2><p>{post.body}</p></div>}
        </div>
    )
}

export default Post