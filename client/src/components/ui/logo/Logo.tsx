import React from "react";
import { WrapperType } from "~/src/global-types";
import img from "./images/logo2.png";

const Wrapper: WrapperType = "div";
const Img: WrapperType = "img";
const className: string = "logo";

const Logo = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Img src={img} alt="img" />
    </Wrapper>
  );
};

export default Logo;
