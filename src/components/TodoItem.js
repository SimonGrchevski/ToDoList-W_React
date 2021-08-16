import React from 'react';

const TodoItem = (props) => {

  return  ( 
    <React.Fragment>
      <li key={props.key}>{props.title}</li>
    </React.Fragment>
  )
}
export default  TodoItem;