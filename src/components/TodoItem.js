import React from 'react';
import TodosList from './TodosList';


function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

export default TodoItem;
