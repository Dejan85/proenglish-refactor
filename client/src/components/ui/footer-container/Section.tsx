import React from "react";
import { WrapperType } from "~/src/global-types";
import { SectionProps } from "./types";

const Wrapper: WrapperType = "div";

const Section = (props: SectionProps) => {
  const { children, width } = props;

  const style = { width };

  return (
    <Wrapper style={style} className="footer-container__section">
      {children}
    </Wrapper>
  );
};

export default Section;
