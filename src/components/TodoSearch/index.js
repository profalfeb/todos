import React, { useContext } from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../../TodoContext';

const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext);

  const handleChangeSearch = e => {
    setSearchValue(e.target.value);
  };

  return (
    <input 
      className="TodoSearch" 
      placeholder='Escribe una nueva tarea'
      value={searchValue}
      onChange={handleChangeSearch}
    />
  )
}

export { TodoSearch }