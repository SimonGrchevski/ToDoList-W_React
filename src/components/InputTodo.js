import React from 'react';

export default class InputTodo extends React.Component {

  render () {
    return (
      <form>
        <input type="text" placeholder="Add todo.." />
        <buttom>Submit</buttom>
      </form>
    );
  }
} 