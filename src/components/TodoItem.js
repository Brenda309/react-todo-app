import React from 'react';
import TodosList from './TodosList';
import TodoContainer from './TodoContainer';

function TodoItem(props) {

  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
      </button>
      {props.todo.title}
    </li>
  );
}

export default TodoItem;
