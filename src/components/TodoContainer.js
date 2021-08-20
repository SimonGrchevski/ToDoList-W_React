import React from "react"
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from "./InputTodo";

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

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
  }

  handleDelete = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  }

  addTodoItem = title => {
    const newToDo = {
      id: 4,
      title: title,
      completed: false,
    }
    this.setState({
      todos: this.state.todos.concat(newToDo),
    })
  }
  
  render() {
    const { todos }  = this.state;
    return (
      <React.Fragment>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem}/>
        <TodoList
          toDos={todos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}/>
      </React.Fragment>
    )
  }
}
