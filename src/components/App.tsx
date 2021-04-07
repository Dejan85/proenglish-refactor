import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./ui";
import { Header } from "./frontend";

const App = (): JSX.Element => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/">{/* home */}</Route>
          <Route path="/onama">{/* home */}</Route>
          <Route path="/kursevi">{/* home */}</Route>
          <Route path="/ispiti">{/* home */}</Route>
          <Route path="/cenovnik">{/* home */}</Route>
          <Route path="/dogadjaji">{/* home */}</Route>
          <Route path="/blog">{/* home */}</Route>
          <Route path="/kontakt">{/* home */}</Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
