import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducer/ReducerTodo";
import CardDisplay from "./CardDisplay";

const TodoForm = () => {
  //reducer state
  const [state, dispatch] = useReducer(reducer, initialState);

  //local state
  const [theTodo, setTheTodo] = useState("");

  //toggle completed Todo's
  // const toggleCompleted = () => {
  //   const aCopyofState = [...state].map((each) => {
  //     state.completed === false ? "todo" : "todo completed";
  //   });
  // };

  //handle changes
  const handleChanges = (event) => {
    setTheTodo(event.target.value);
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: theTodo });
    setTheTodo("");
  };

  return (
    <>
      <div>
        {/* Form Starts Here */}
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
        {/* Form Ends Here */}
        <button onClick={() => dispatch({ type: "REMOVE_TODO" })}>
          -Clear Completed
        </button>
      </div>
      <CardDisplay initialState={state} dispatch={dispatch} />
    </>
  );
};

export default TodoForm;
