import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import store from "./components/store/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <App />{" "}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
