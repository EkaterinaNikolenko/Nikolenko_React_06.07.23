import React from 'react';
import { useContext } from 'react';
import { Context } from '../App';

const List = () => {
    const { users } = useContext(Context);
    return (
        <div>
            <h3>List of users</h3>
            <ul>{users && users.map((user => <li key={user.id}>{user.name}</li>))}</ul>
        </div>
    )
}

export default List;