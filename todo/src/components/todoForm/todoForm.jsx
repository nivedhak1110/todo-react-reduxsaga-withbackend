import { useState } from "react";
//import onFormSubmit from "../../App";

const TodoForm = ({ onFormSubmit }) => {
  const [value, setValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [statusValue, setStatusValue] = useState("inComplete");

  const onvalueChange = (e) => {
    setValue(e.target.value);
  };

  const onDateValueChange = (e) => {
    setDateValue(e.target.value);
  };

  const onStatusValueChange = (e) => {
    setStatusValue(e.target.value);
  };

  const submitValue = (e) => {
    e.preventDefault();
    onFormSubmit({ value, dateValue, statusValue });
    setValue("");
    setDateValue("");
    setStatusValue("");
  };

  return (
    <div className="todoContainer">
      <form onSubmit={submitValue}>
        <input
          type="text"
          id="todo"
          placeholder="what's your Todo"
          value={value}
          onChange={onvalueChange}
        ></input>
        <br />
        <br />
        <input
          type="date"
          id="date"
          placeholder=" Pick Date"
          value={dateValue}
          onChange={onDateValueChange}
        />
        <br />
        <br />
        <div className="dropdown" id="status">
          <select
            name="todos"
            className="btn btn-primary dropdown-toggle"
            value={statusValue}
            onChange={onStatusValueChange}
          >
            <option value="completed">completed</option>
            <option value="inComplete">in Complete</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-sm m-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
