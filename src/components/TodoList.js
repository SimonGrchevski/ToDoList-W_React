import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { toDos, handleChange, handleDelete } = props;
  return (
    <ul>
      {toDos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toDos: PropTypes.objectOf(Array).isRequired,
};

export default TodoList;
