const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.date}</span>
            <span>{todo.value}</span>
            <span>{todo.status}</span>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="btn btn-success btn-sm m-2"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onDelete("all")}
        className="btn btn-success btn-sm m-2"
      >
        Delete All
      </button>
    </div>
  );
};

export default TodoList;
