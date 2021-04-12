import React from "react";
import { LinkPropsType } from "./types";

const Link = (props: LinkPropsType) => {
  const { as = "a", to, href, text, className: customClassName } = props;
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
      {text}
    </Wrapper>
  );
};

export default Link;
