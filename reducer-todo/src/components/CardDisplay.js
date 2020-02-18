import React from "react";

const CardDisplay = (props) => {
  return (
    <div>
      {props.initialState.map((each) => {
        return (
          <div
            key={each.id}
            className={
              props.initialState.completed === false ? "todo" : "todo completed"
            }
            onClick={() => {
              props.initialState.completed = !props.initialState.completed;
              props.dispatch({ type: "TOGGLE_COMPLETED" });
            }}
          >
            <h2>{each.item}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CardDisplay;
