import React from "react";
import "./styles/main.scss";
import { Container, SubContainer, Navigation, Logo } from "./ui";

const App = (): JSX.Element => {
  return (
    <Container>
      <SubContainer>
        <Logo />
        <Navigation />
      </SubContainer>
    </Container>
  );
};

export default App;
