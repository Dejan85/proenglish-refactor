import { WrapperType, PropsTypes } from "./types";
import React from "react";

function FontAwesomeIcon(props: PropsTypes) {
  const { className } = props;
  const I: WrapperType = "i";
  return <I className={className} />;
}

export default FontAwesomeIcon;
