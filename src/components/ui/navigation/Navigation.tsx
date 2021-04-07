import React from "react";
import { WrapperType, NavigationProps } from "./types";
import List from "./partials/List";

const Navigation = (props: NavigationProps) => {
  const { routerLink, linksText, linksPath } = props;
  const Wrapper: WrapperType = "ul";
  const Link: any = routerLink;

  return (
    <Wrapper className="navigation">
      <List>
        {linksText?.map((text: string, index: number) => (
          <Link key={text} to={linksPath[index]}>
            {text}
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

export default Navigation;
