import React from "react";
import { WelcomePage, About, Course, Blog } from "./pages";

const MemoizedUi: JSX.Element = (
  <>
    <WelcomePage />
    <About />
    <Course />
    <Blog />
  </>
);

const Home = (): JSX.Element => MemoizedUi;

export default Home;
