import React from 'react';
import "./TodoCreateButton.css";

function CreateTodoButton({ openModal, setOpenModal }) {

  const handleClick = () => {
    setOpenModal(prevOpenModal => !prevOpenModal);
  }

  return (
    <button 
      className= {`${!openModal ? 'CreateTodoButton' : 'CreateTodoButtonHide'}`}
      onClick={handleClick}
    >
      +
    </button>
  )
}

export { CreateTodoButton };
