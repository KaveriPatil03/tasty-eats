import { createStore } from "redux";
import rootReducers from "./reducer/index";

// Load initial state from local storage if available
const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : [];

const store = createStore(rootReducers, persistedState);

// Subscribe to store changes and update local storage
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });

export default store;
