import React from "react";
import { WrapperType, ListProps } from "../types";

const List = (props: ListProps) => {
  const { children } = props;
  const Wrapper: WrapperType = "li";
  return <Wrapper className="navigation__list">{children}</Wrapper>;
};

export default List;
