import { WrapperType, FontAwesomeIconProps, ContainerType } from "./types";
import React from "react";
const I: WrapperType = "i";
const Container: ContainerType = "div";

function FontAwesomeIcon(props: FontAwesomeIconProps): JSX.Element {
  const { className } = props;
  return (
    <Container>
      <I className={className} />
    </Container>
  );
}

export default FontAwesomeIcon;
