import React from "react";
import { NavLink } from "react-router-dom";
import { SubContainer, Logo, Navigation } from "~/src/components/ui";
import { linksText, linksPath } from "./constants";

const Header = (): JSX.Element => {
  return (
    <SubContainer>
      <Logo />
      <Navigation
        routerLink={NavLink}
        linksText={linksText}
        linksPath={linksPath}
      />
    </SubContainer>
  );
};

export default Header;
