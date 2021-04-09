import React from "react";
import { ListProps } from "../types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "li";
const className: string = "navigation__list";

const List = (props: ListProps) => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default List;
