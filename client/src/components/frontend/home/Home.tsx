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
  </>
);

const Home = (): JSX.Element => MemoizedUi;

export default Home;
