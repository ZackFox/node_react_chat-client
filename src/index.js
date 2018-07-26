import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import cookies from "react-cookies";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";

import App from "./App";
import { LOG_IN_SUCCESS, LOG_OUT } from "./constants/types";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const token = cookies.load("token");
const user = JSON.parse(localStorage.getItem("user"));

if (token && user) {
  store.dispatch({ type: LOG_IN_SUCCESS, user });
} else {
  store.dispatch({ type: LOG_OUT });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
