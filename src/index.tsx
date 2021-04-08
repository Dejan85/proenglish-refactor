import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/styles/main.scss";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "./utils/history";
import configureStore from "./redux/configureStore";

const initialState = {};
const store = configureStore(initialState, history);

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root
);
