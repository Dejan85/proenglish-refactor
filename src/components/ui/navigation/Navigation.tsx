import React from "react";
import { WrapperType, NavigationProps } from "./types";
import List from "./partials/List";

const Navigation = (props: NavigationProps) => {
  const { routerLink, linksText, linksPath } = props;
  const Wrapper: WrapperType = "ul";
  const Link: any = routerLink;

  return (
    <Wrapper className="navigation">
      {linksText?.map((text: string, index: number) => (
        <List key={text}>
          <Link
            className="navigation__link"
            activeClassName="active"
            exact
            to={linksPath[index]}
          >
            {text}
          </Link>
        </List>
      ))}
    </Wrapper>
  );
};

export default Navigation;
