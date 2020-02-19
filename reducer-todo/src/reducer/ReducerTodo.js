//Initial State
export const initialState = [
  { item: "Learn about reducers today", completed: false, id: 1 }
];

//Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
const REMOVE_TODO = "REMOVE_TODO";

//Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];
    case "TOGGLE_COMPLETED":
      return [...state];
    case "REMOVE_TODO":
      return [...state];
    default:
      return state;
  }
};
