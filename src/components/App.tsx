import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "./ui";
import { Header } from "./frontend";

const App = (): JSX.Element => {
  return (
    <Router>
      <Container>
        <Header />
      </Container>
    </Router>
  );
};

export default App;
