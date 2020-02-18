import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducer/ReducerTodo";

const TodoForm = () => {
  //reducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  //local state
  const [theTodo, setTheTodo] = useState("");

  //handle changes
  const handleChanges = (event) => {
    setTheTodo(event.target.value);
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* Form starts here */}
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input
            name="todo"
            placeholder="Enter a task for today here."
            onChange={handleChanges}
            value={theTodo}
          />
        </label>

        <button type="submit">+Add Todo</button>
      </form>
      {/* Form ends here */}
      <button
        type="button"
        onClick={() => {
          console.log("test");
        }}
      >
        -Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
