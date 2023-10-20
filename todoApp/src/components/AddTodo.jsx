import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={input} onChange={handleChange} />
                <button>Add</button>
            </form>
        </>
    )
}

export default AddTodo
