import PropsType from 'prop-types';
import React from 'react';

export default class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { newTitle } = this.state;
    const { addTodoProps } = this.props;
    if (newTitle.trim()) {
      addTodoProps(newTitle);
      this.setState({
        title: '',
      });
      // eslint-disable-next-line
    } else { alert('Incorrect title'); }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo.."
          value={title}
          onChange={this.onChange}
          name="title"
        />
        <button type="button">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropsType.func.isRequired,
};
