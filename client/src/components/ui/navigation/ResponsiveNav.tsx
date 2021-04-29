import React, { useState } from "react";
import { WrapperType } from "~/src/global-types";
import { NavigationProps } from "./types";
import List from "./partials/List";
import uniqid from "uniqid";
import { FontAwesomeIcon, ContentContainer } from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";

const Wrapper: WrapperType = "ul";
const className: string = "responsive-navigation";
const linkClassName: string = "responsive-navigation__link";
const responsiveActiveClassName: string = "responsive-navigation__active";

const ResponsiveNavigation = (props: NavigationProps): JSX.Element => {
  const { routerLink, linksText, linksPath } = props;
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const Link: any = routerLink;

  const dropNavHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    // <Scrollbars>
    <Wrapper className={className}>
      <ContentContainer className="responsive-navigation__container">
        {toggleNav &&
          linksText?.map((text: string, index: number) => (
            <List key={uniqid()} onClick={dropNavHandler}>
              <Link
                className={linkClassName}
                activeClassName={responsiveActiveClassName}
                exact
                to={linksPath[index]}
              >
                {text}
              </Link>
            </List>
          ))}
      </ContentContainer>

      <FontAwesomeIcon
        className="fas fa-bars responsive-navigation__icon"
        onClick={dropNavHandler}
      />
    </Wrapper>
    // </Scrollbars>
  );
};

export default ResponsiveNavigation;
