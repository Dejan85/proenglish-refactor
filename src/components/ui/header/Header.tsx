import React from "react";
import { WrapperType } from "~/src/global-types";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const { children } = props;
  const Header: WrapperType = "div";
  return <Header className="header">{children}</Header>;
};

export default Header;
