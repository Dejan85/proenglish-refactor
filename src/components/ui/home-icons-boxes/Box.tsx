import React from "react";
import { TagType, BoxProps } from "./types";
import { Text, FontAwesomeIcon } from "~/src/components/ui";

const Wrapper: TagType = "div";
const IconContainer: TagType = "div";
const className: string = "box";
const IconContainerClassName: string = `icon-container`;

const Box = (props: BoxProps): JSX.Element => {
  const { iconClassName, text } = props;
  return (
    <Wrapper className={className}>
      <IconContainer className={IconContainerClassName}>
        <FontAwesomeIcon className={iconClassName} />
      </IconContainer>
      <Text as="p" text={text} />
    </Wrapper>
  );
};

export default Box;
