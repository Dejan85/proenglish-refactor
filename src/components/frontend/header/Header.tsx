import React from "react";
import { NavLink } from "react-router-dom";
import {
  SubContainer,
  Logo,
  Navigation,
  Header as HeaderUi,
} from "~/src/components/ui";
import { linksText, linksPath } from "./constants";

const Header = (): JSX.Element => {
  return (
    <HeaderUi>
      <SubContainer>
        <Logo />
        <Navigation
          routerLink={NavLink}
          linksText={linksText}
          linksPath={linksPath}
        />
      </SubContainer>
    </HeaderUi>
  );
};

export default Header;
