//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

function loggingReducer(state = initialState, action) {
  if (action.type === "login") {
    return {
      isLoggedIn: true,
    };
  }
  return state;
}

//const store = createStore(loggingReducer);
const store = configureStore({reducer: {loggingReducer}});
export default store;
