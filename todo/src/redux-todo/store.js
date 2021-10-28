import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import { reducer } from "./reducer";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
// then run the saga
sagaMiddleware.run(mySaga);

export default store;
