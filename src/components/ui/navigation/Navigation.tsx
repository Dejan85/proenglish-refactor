import React from "react";
import { WrapperType } from "~/src/global-types";
import { NavigationProps } from "./types";
import List from "./partials/List";
import uniqid from "uniqid";

const Wrapper: WrapperType = "ul";
const className: string = "navigation";
const linkClassName: string = "navigation__link";
const activeClassName: string = "active";

const Navigation = (props: NavigationProps) => {
  const { routerLink, linksText, linksPath } = props;
  const Link: any = routerLink;

  return (
    <Wrapper className={className}>
      {linksText?.map((text: string, index: number) => (
        <List key={uniqid()}>
          <Link
            className={linkClassName}
            activeClassName={activeClassName}
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
