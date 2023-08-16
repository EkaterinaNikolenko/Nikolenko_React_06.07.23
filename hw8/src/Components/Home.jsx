import React from 'react';
import useFetch from './useFetch';

const Home = () => {
    const [data, error, isLoading, refetch] = useFetch('https://jsonplaceholder.typicode.com/todos');
    return (
        <div>
            <h1>Home</h1>
            {error && <h2>{error}</h2>}
            {isLoading && <h2>Loading...</h2>}
            <ul>
                {data.length > 0 && data.map((todo) => <li>{todo.title}</li>)}
            </ul>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default Home;