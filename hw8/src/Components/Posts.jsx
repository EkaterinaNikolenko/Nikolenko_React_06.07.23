import React from 'react';
import useFetch from './useFetch';

const Posts = () => {
    const [data, error, isLoading, refetch] = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
            <h1>Posts</h1>
            {error && <h2>{error}</h2>}
            {isLoading && <h2>Loading...</h2>}
            <ul>
                {data.length > 0 && data.map((post) => <li>{post.title}</li>)}
            </ul>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default Posts;