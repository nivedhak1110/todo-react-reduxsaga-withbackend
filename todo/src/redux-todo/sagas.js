import actions from "./actions";
import { call, takeLatest, put, fork } from "redux-saga/effects";
import axios from "axios";
import { addTodo, deleteTodo } from "./reducer";

function* todoAction(action) {
  console.log(action.type);
  if (action.type === "ADD_SAGA_TODO") {
    console.log("saveTodo -- i got it");
    const res = axios.post("http://localhost:5001/todos", action.payload);
    console.log(res.data);
    console.log(action.payload);
    yield put(addTodo(action.payload));
  } else if (action.type === "DELETE_SAGA_TODO") {
    console.log("DeleteTodo -- i got it");
    const res = axios.delete(
      "http://localhost:5001/todos/" + action.payload.id
    );
    console.log("http://localhost:5001/todos/" + action.payload.id);
    yield put(deleteTodo(action.payload.id));
  }
}

function* Saga() {
  yield takeLatest([actions.addSagaTodo, actions.deleteSagaTodo], todoAction);
}

export default Saga;
