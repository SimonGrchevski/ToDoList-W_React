import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

  render() {
    const { toDos } = this.props;
    return ( 
      <React.Fragment>
        <ul>
          {toDos.map(todo => (
            <TodoItem key={todo.key} title={todo.title}/>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}