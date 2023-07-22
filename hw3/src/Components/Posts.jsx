import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            try {
                setError('');
                setIsLoading(true);
                const responce = await fetch("https://jsonplaceholder.typicode.com/posts");

                if(!responce.ok) {
                    throw new Error('Failed to fetch'); 
                }

                const data = await responce.json();
                setPosts(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
            
        }
        getPosts();
    }, [])

    return (
        <div>
            {error && <h1>{error}</h1>}
            {isLoading ? <h1>Loading...</h1> : <ul>{posts && posts.map((i) => <li key={i.id}>{i.title}</li>)}</ul>}
        </div>
    )
}

export default Posts;