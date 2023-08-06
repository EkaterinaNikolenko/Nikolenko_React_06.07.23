import React from 'react';
import './Item.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Item = (props) => {
    const { item, onDelete, onCheck, onEdit } = props;

    const handleDeleteTodo = () => {
        onDelete(item.id);
    }

    const handleCheckTodo = () => {
        onCheck(item.id);
    }

    const handleEditTodo = () => {
        onEdit(item);
    }

    return (
        <div className='item'>
            <Input type="checkbox" onChange={handleCheckTodo} checked={item.checked}/>
            <p>{item.title}</p>
            <div>
                <Button text="Edit" onClick={handleEditTodo} />
                <Button text="Delete" onClick={handleDeleteTodo} />
            </div>
        </div>
    );
}

export default Item;