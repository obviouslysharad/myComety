import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

store.subscribe(() => console.log("subscription", store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="h-screen" />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
