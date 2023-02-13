import React from 'react';
import "./TodoItem.css";
import { TodoIcon } from '../TodoIcon';

function TodoItem(props){

  // const onComplete = () => {
  //   alert('Completaste la tarea "' + props.text + '"');
  // }



  return (
    <li className='TodoItem'>
      <span>
        <TodoIcon type='check' color='green' onClick={props.onComplete}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span>
        <TodoIcon type='delete' color='red' onClick={props.onDelete}/>
      </span>
    </li>
  )
}

export { TodoItem };