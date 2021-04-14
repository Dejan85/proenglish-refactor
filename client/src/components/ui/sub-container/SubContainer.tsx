import React from "react";
import { SubContainerProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "sub-container";

const SubContainer = (props: SubContainerProps): JSX.Element => {
  console.log("test sub container render", "render");

  const { children, className: customClassName } = props;
  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </Wrapper>
  );
};

export default SubContainer;
