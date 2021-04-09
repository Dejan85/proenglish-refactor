import { WrapperType, FontAwesomeIconProps } from "./types";
import React from "react";
const I: WrapperType = "i";

function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  const { className } = props;
  return <I className={className} />;
}

export default FontAwesomeIcon;
