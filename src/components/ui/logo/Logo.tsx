import React from "react";
import { WrapperType } from "~/src/global-types";
import img from "./images/logo2.png";

const Wrapper: WrapperType = "div";
const className: string = "logo";

const Logo = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <img src={img} alt="img" />
    </Wrapper>
  );
};

export default Logo;
