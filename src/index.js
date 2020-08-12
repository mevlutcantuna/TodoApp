import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { createStore } from "redux";
import MainReducer from "./Reducers/MainReducer";
import { Provider } from "react-redux";

const store = createStore(MainReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
