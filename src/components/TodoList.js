import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { toDos } = this.props;
    return ( 
      <React.Fragment>
        <ul>
          {toDos.map(todo => (
            <TodoItem 
              key={todo.id}
              id={todo.id}
              title={todo.title} 
              completed ={todo.completed}
              handleChange={this.props.handleChange}/>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}