import React from "react";
import TodoForm from "./components/TodoForm";
import CardDisplay from "./components/CardDisplay";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <CardDisplay />
    </div>
  );
}

export default App;
