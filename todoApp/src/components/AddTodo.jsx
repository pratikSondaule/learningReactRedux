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
                <input style={{ width: "200px", height: "28px", marginRight: "12px", background: "white", borderRadius: "8px", color: "black", fontSize: "17px" }} type="text" value={input} onChange={handleChange} />
                <button>Add</button>
            </form>
        </>
    )
}

export default AddTodo
