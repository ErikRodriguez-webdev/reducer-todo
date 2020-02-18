import React from "react";

const TodoForm = () => {
  return (
    <div>
      <form>
        <label>
          Todo:
          <input name="todo" placeholder="Enter a task for today here." />
        </label>

        <button>+Add Todo</button>
        <button>-Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
