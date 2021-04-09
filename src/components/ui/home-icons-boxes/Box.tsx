import React from "react";
import { TagProp, BoxProps } from "./types";
import { Text, FontAwesomeIcon } from "~/src/components/ui";

function box(props: BoxProps): JSX.Element {
  const { iconClassName, text } = props;
  const Div: TagProp = "div";
  const className = "box";
  return (
    <Div className={className}>
      <FontAwesomeIcon className={iconClassName} />
      <Text as="p" text={text} />
    </Div>
  );
}

export default box;
