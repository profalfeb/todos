import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css';

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = useState('');
  const { 
    addTodo,
    setOpenModal
  } = useContext(TodoContext);
  
  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit='onSubmit'>
      <label>Escribe tu nueva tarea</label>
      <textarea
        value = { newTodoValue }
        placeholder='Escribe tu nueva tarea'
        onChange = { onChange }
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button--cancel'
          type='button'
          onClick = { onCancel }
        >
          Cancelar
        </button>

        <button
          className='TodoForm-button TodoForm-button--add'
          type='submit'
          disabled = {!newTodoValue.trim().length}
          onClick = { onSubmit }
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };