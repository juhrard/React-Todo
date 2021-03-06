import React from 'react';

const Todo = props => {
  console.log(props);
  return (
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.todo}</p>
    </div>
  );
};

export default Todo;