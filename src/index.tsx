import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);
