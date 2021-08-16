import React from "react"
import TodoList from './TodoList';
import Header from './Header';

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Setup development environment",
          completed: true
        },
        {
          id: 2,
          title: "Develop website and add content",
          completed: false
        },
        {
          id: 3,
          title: "Deploy to live server",
          completed: false
        }
      ]
    };
  }
  render() {
    const { todos }  = this.state;
    return (
      <React.Fragment>
        <Header />
        <TodoList toDos={todos}/>
      </React.Fragment>
    )
  }
}
