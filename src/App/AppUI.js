
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../Modal';

function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p className='warning'>Ocurrió un error al crear tu tarea...</p>}
        {loading && <p className='warning'>Cargando...</p>}
        {(!loading && !searchedTodos.length) && <p className='warning'>Crea tu primera tarea...</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
        
      <CreateTodoButton
        openModal = {openModal}
        setOpenModal = {setOpenModal}
      />
    </>
  )
}

export { AppUI };