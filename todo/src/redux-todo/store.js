/*
import { configureStore } from "@reduxjs/toolkit";
import {  applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'


// mount it on the Store
const store = configureStore (
  reducer,
  devTools:true,
  
)


export default store;
// render the application
*/
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
