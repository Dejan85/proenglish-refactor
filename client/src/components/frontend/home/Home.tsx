import React from "react";
import {
  WelcomePage,
  About,
  Course,
  Blog,
  Newsletter,
  Events,
  Experience,
} from "./pages";

const MemoizedUi: JSX.Element = (
  <>
    <WelcomePage />
    <About />
    <Course />
    <Blog />
    <Newsletter />
    <Events />
    <Experience />
    <div style={{ height: "50rem" }} />
  </>
);

const Home = (): JSX.Element => MemoizedUi;

export default Home;
