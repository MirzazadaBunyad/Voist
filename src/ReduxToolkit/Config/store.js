import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stateSliceReducer from "../features/states/slice";

const rootReducer = combineReducers({
  states: stateSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;