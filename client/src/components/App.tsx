import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "~/src/components/ui";
import Home from "./frontend/home/Home";
import About from "./frontend/about/About";
import Course from "./frontend/course/Course";
import {
  Header,
  // About,
  // Course,
  Exams,
  Pricelist,
  Contact,
} from "~/src/components/frontend";
import { Footer } from "./deprecate";

const App = (): JSX.Element => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/onama">
            <About />
          </Route>
          <Route exact path="/kursevi">
            <Course />
          </Route>
          <Route exact path="/ispiti">
            {/* <Exams /> */}
          </Route>
          <Route exact path="/cenovnik">
            <Pricelist />
          </Route>
          <Route path="/dogadjaji">{/* home */}</Route>
          <Route path="/blog">{/* home */}</Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
};

export default App;
