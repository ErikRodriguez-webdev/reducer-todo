import React from "react";

const CardDisplay = (props) => {
  return (
    <div>
      {props.initialState.map((each) => {
        return (
          <div
            key={each.id}
            onClick={(clickedId) =>
              props.dispatch({ type: "TOGGLE_COMPLETED", payload: clickedId })
            }
          >
            <h2>{each.item}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CardDisplay;
