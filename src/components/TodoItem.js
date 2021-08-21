import PropTypes from 'prop-types';
import React from 'react';

const TodoItem = (props) => {
  const {
    completed, id, handleChange, handleDelete, title,
  } = props;
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChange(id)}
        />
        <button type="button" onClick={() => handleDelete(id)}>Delete</button>
        {title}
      </li>
    </>
  );
};

TodoItem.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodoItem;
