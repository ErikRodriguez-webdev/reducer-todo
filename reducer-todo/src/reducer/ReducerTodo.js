//Initial State
export const initialState = {
    allTodos: {}
};

//Actions
export const addTodo = {
    type: 'ADD_TODO',
    payload: {
        item: theTodo,
        completed: false, 
        id: Date.now() }
};

//Reducer
export const reducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TODO' :
          return { ...state, action.payload}
    default:
      return state;
  }
};
