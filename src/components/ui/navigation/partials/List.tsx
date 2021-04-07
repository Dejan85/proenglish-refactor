import React from "react";
import { ListProps } from "../types";
import { WrapperType } from "~/src/components/global-types";

const List = (props: ListProps) => {
  const { children } = props;
  const Wrapper: WrapperType = "li";
  return <Wrapper className="navigation__list">{children}</Wrapper>;
};

export default List;
