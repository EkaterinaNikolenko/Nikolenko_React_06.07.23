import React from 'react';
import useFetch from './useFetch';

const Users = () => {
    const [data, error, isLoading, refetch] = useFetch('https://jsonplaceholder.typicode.com/users');
    return (
        <div>
            <h1>Users</h1>
            {error && <h2>{error}</h2>}
            {isLoading && <h2>Loading...</h2>}
            <ul>
                {data.length > 0 && data.map((user) => <li>{user.name}</li>)}
            </ul>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default Users;