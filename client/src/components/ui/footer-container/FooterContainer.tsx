import React from "react";
import { WrapperType } from "~/src/global-types";
import List from "./List";
import Section from "./Section";
import Heading from "./Heading";
import { FooterContainerProps } from "./types";

const Wrapper: WrapperType = "div";

const FooterContainer = (props: FooterContainerProps) => {
  const { children } = props;
  return <Wrapper className="footer-container">{children}</Wrapper>;
};

FooterContainer.List = List;
FooterContainer.Section = Section;
FooterContainer.Heading = Heading;

export default FooterContainer;
