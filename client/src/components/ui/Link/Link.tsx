import React from "react";
import { LinkPropsType } from "./types";

const Link = (props: LinkPropsType) => {
  const { as = "a", to, href, className: customClassName, children } = props;
  const restProps = { to, href };
  const className: string = "link";

  const Wrapper = as;
  return (
    <Wrapper
      className={
        customClassName ? `${className}__${customClassName}` : className
      }
      {...restProps}
    >
      {children}
    </Wrapper>
  );
};

export default Link;
