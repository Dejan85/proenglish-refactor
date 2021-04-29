import React from "react";
import { ListProps } from "../types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "li";
const className: string = "responsive-navigation__list";

const List = (props: ListProps): JSX.Element => {
  const { children, onClick } = props;
  return (
    <Wrapper onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};

export default List;
