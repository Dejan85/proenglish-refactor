import React from "react";
import { WelcomePage, About, Course } from "./pages";

const Home = (): JSX.Element => {
  return (
    <>
      <WelcomePage />
      <About />
      <Course />
    </>
  );
};

export default Home;
