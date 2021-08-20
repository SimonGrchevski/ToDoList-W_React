import React from 'react';

export default class InputTodo extends React.Component {

  state = {
    title: '',
  }

  onChange = (e) => { this.setState({
    [e.target.name]: e.target.value,
  })}

  handleSubmit = (e) =>{
    e.preventDefault();
    const newTitle = this.state.title;
    if( newTitle.trim() )
    {
      this.props.addTodoProps(newTitle);
      this.setState({
        title: '',
      })
    }
    else 
      alert("Incorrect title");
    
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input type="text" placeholder="Add todo.." 
          value={this.state.title} 
          onChange={this.onChange}
          name='title'/>
        <button>Submit</button>
      </form>
    );
  }
} 