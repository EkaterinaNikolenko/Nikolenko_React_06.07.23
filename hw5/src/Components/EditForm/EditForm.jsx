import React from 'react'
import './EditForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useState } from 'react';

const EditForm = (props) => {
    const { editedTodo, onUpdate } = props;
    const [updatedTitle, setUpdatedTitle] = useState(editedTodo.title || "");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onUpdate({...editedTodo, title: updatedTitle});
    }

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <Input value={updatedTitle} onChange={setUpdatedTitle} />
            <Button text="Save" type="submit" />
        </form>
    )
}

export default EditForm