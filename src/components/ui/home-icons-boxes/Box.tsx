import React from "react";
import { TagType, BoxProps } from "./types";
import { Text, FontAwesomeIcon } from "~/src/components/ui";

const Wrapper: TagType = "div";
const IconContainer: TagType = "div";
const className: string = "box";
const IconContainerClassName: string = `icon-container`;

const Box = (props: BoxProps): JSX.Element => {
  const { iconClassName, text, customClassName } = props;
  return (
    <Wrapper className={className}>
      <IconContainer
        className={
          customClassName
            ? `${IconContainerClassName} ${IconContainerClassName}--${customClassName}`
            : IconContainerClassName
        }
      >
        <FontAwesomeIcon className={iconClassName} />
      </IconContainer>
      <Text as="p" text={text} className="home-boxes-text" />
    </Wrapper>
  );
};

export default Box;
