import { WrapperType, FontAwesomeIconProps } from "./types";
import React from "react";
const I: WrapperType = "i";
const iconClassName = "icon";

function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  const { className, onClick } = props;
  return <I onClick={onClick} className={`${className} ${iconClassName}`} />;
}

export default FontAwesomeIcon;
