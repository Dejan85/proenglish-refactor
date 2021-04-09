import React from "react";

const WrapperTag = "div";
const className = "wrapper";

const Wrapper = (props) => {
  const { children } = props;
  return <WrapperTag className={className}>{children}</WrapperTag>;
};

export default Wrapper;
