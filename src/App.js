import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  {text: "Cortar la cebolla"},
  {text: "Tomar el curso introductorio de React"},
  {text: "Llorar con la cebolla"}
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
        <input placeholder='Cebolla'/>
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
