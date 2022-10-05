const initialState = {
    todolist : []
  };
  
  export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state, // { counter: 0 }
          todolist: [...state.todolist, action.payload] // override
        };
      case "RESETALL":
        return {
          ...state, // { counter: 0 }
          todolist: []
        };
      default:
        return state;
    }
  };