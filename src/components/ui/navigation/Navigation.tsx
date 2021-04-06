import React from "react";
import { WrapperType } from "./types";
import Link from "./partials/Link";
import { navigationLinks } from "./messages";

const Navigation = () => {
  const Wrapper: WrapperType = "div";
  return (
    <Wrapper className="navigation">
      {navigationLinks.map((link) => (
        <Link key={link} text={link} />
      ))}
    </Wrapper>
  );
};

export default Navigation;
