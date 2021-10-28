import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoReducer = createSlice({
  name: "todoapp",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodo: (state, action) => {
      console.log("addtodo inside reducer");
      console.log(action);
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log("inside del todo reducer");
      console.log(action.payload);
      state.todos =
        action.payload === "all"
          ? []
          : state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = TodoReducer.actions;
export const reducer = TodoReducer.reducer;
