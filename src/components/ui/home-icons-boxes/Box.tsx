import React from "react";
import { TagProp, BoxProps } from "./types";
import { Text, FontAwesomeIcon } from "~/src/components/ui";

function box(props: BoxProps): JSX.Element {
  const { iconClassName, text } = props;
  const Wrapper: TagProp = "div";
  const className = "box";
  return (
    <Wrapper className={className}>
      <FontAwesomeIcon className={iconClassName} />
      <Text as="p" text={text} />
    </Wrapper>
  );
}

export default box;
