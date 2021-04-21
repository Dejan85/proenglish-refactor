import React, { useEffect } from "react";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import { About, Course, Blog, Newsletter, Events, Experience } from "./pages";

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

const Home = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return MemoizedUi;
};

export default Home;
