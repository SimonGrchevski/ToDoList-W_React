import React, { Component } from 'react';

export default class TodoList extends Component {

  render() {
    const { toDos } = this.props;
    return ( 
      <React.Fragment>
        <ul>
          {toDos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}