import React from "react";
import { WrapperType } from "~/src/components/global-types";
import img from "./images/logo2.png";

const Logo = (): JSX.Element => {
  const Wrapper: WrapperType = "div";
  return (
    <Wrapper className="logo">
      <img src={img} alt="img" />
    </Wrapper>
  );
};

export default Logo;
