import React from "react";

const className = "link";

const Link = (props) => {
  const { as = "a", to } = props;
  const Wrapper = as;

  return <Wrapper className={className}></Wrapper>;
};

export default Link;
