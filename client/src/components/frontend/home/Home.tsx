import React from "react";
import { WelcomePage, About, Course, Blog, Newsletter } from "./pages";

const MemoizedUi: JSX.Element = (
  <>
    <WelcomePage />
    <About />
    <Course />
    <Blog />
    <Newsletter />
  </>
);

const Home = (): JSX.Element => MemoizedUi;

export default Home;
