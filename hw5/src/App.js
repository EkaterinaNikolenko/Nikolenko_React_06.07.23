import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Item from './Components/Item/Item';
import EditForm from './Components/EditForm/EditForm';

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      checked: false
    };
    setTodos([...todos, newTodo]);
  }

  const handleDeleteTodo = (id) => {
    setTodos((todo) => todos.filter((i) => i.id !== id));
  }

  const handleCheckTodo = (id) => {
    setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  }

  const handleUpdateTodo = (updatedTodo) => {
    setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setIsEditing(false);
  }

  const enterEditMode = (todo) => {
    setEditedTodo(todo);
    setIsEditing(true);
  }

  return (
    <div className="App">
      {isEditing && (
        <div>
          <EditForm editedTodo={editedTodo} onUpdate={handleUpdateTodo} />
        </div>
      )}
      <div className='createTodo'>
        <Input value={title} onChange={setTitle} />
        <Button text="Create todo" onClick={handleCreateTodo} />
      </div>
      <div>
        {todos.length > 0 &&
        todos.map((todo) => 
          <Item 
            key={todo.id} 
            item={todo} 
            onDelete={handleDeleteTodo} 
            onCheck={handleCheckTodo} 
            onEdit={enterEditMode}
          />)}
      </div>
    </div>
  );
}

export default App;
