import React from "react";
import { Link } from "react-router-dom";
import { SubContainer, Logo, Navigation } from "../../ui";
import { linksText, linksPath } from "./constants";

const Header = (): JSX.Element => {
  return (
    <SubContainer>
      <Logo />
      <Navigation
        routerLink={Link}
        linksText={linksText}
        linksPath={linksPath}
      />
    </SubContainer>
  );
};

export default Header;
