import React from 'react';

const TodoItem = (props) => {

  return  ( 
    <React.Fragment>
      <li>
        <input type="checkbox" 
        checked={props.completed}
        onChange ={() => console.log("Clicked")}/>
      {props.title}
      </li>
    </React.Fragment>
  )
}
export default  TodoItem;