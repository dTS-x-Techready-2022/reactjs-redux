const initialState = {
    todolist : []
  };
  
  export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state, 
          todolist: [...state.todolist, action.payload] // override
        };
        
      case "RESETALL":
        return {
          ...state, 
          todolist: []
        };

      case "REMOVE":
        let todo = state.todolist
        todo.splice(action.payload, 1);
        return {
            ...state, 
            todolist: todo
          };

      default:
        return state;
    }
  };