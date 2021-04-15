import React from "react";
import { WelcomePage, About, Course, Blog, Newsletter, Events } from "./pages";

const MemoizedUi: JSX.Element = (
  <>
    <WelcomePage />
    <About />
    <Course />
    <Blog />
    <Newsletter />
    <Events />
    <div style={{ height: "50rem" }} />
  </>
);

const Home = (): JSX.Element => MemoizedUi;

export default Home;
