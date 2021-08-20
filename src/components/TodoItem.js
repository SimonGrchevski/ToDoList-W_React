import React from 'react';

const TodoItem = (props) => (
  <>
    <li>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      {props.title}
    </li>
  </>
);
export default TodoItem;
