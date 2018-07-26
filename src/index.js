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
import { LOG_IN_SUCCESS } from "./constants/types";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const token = cookies.load("token");
if (token) {
  store.dispatch({ type: LOG_IN_SUCCESS });
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
