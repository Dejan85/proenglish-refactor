import React from "react";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";

const ExperienceModal = (props) => {
  const { children } = props;
  return <Wrapper className="experience-modal">{children}</Wrapper>;
};

export default ExperienceModal;
