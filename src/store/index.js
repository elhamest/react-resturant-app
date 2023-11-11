import { createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false };

function authReducer(state = initialAuthState, action) {
  if (action.type === "login") {
    return {
      isLoggedIn: true,
    };
  }
  if(action.type ==="logout")
return {
  isLoggedIn: false
};
return state;
}

const store = createStore(authReducer);
//const store = configureStore({reducer: {authReducer}});
export default store;
