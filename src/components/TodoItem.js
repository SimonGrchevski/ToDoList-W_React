import React from 'react';

const TodoItem = (props) => {

  return  ( 
    <React.Fragment>
      <li>
        <input type="checkbox" 
          checked={props.completed}
          onChange={() => props.handleChange(props.id)}/>
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      {props.title}
      </li>
    </React.Fragment>
  )
}
export default  TodoItem;