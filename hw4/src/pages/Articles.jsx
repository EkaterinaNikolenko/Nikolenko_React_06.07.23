import './Articles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAllPosts = async () => {
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
        getAllPosts();
    }, [])

    return (
        <div className='articles'>
            {error && <h1>{error}</h1>}
            {isLoading ? <h1>Loading...</h1> : <ol className='titles'>{posts && posts.map((i) => <li key={i.id}><Link className='post-title' to={`/articles/${i.id}`}>{i.title}</Link></li>)}</ol>}
        </div>
    )
}

export default Articles;