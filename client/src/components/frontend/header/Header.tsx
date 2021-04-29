import React from "react";
import { NavLink } from "react-router-dom";
import {
  SubContainer,
  Logo,
  Navigation,
  Header as HeaderUi,
} from "~/src/components/ui";
import { linksText, linksPath } from "./constants";

const MemoizedUi: JSX.Element = (
  <HeaderUi>
    <SubContainer>
      <Logo />
      <Navigation
        routerLink={NavLink}
        linksText={linksText}
        linksPath={linksPath}
      />
    </SubContainer>
    <Navigation.ResponsiveNavigation
      routerLink={NavLink}
      linksText={linksText}
      linksPath={linksPath}
    />
  </HeaderUi>
);

const Header = (): JSX.Element => MemoizedUi;

export default Header;
