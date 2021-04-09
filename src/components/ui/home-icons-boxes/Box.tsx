import React from "react";
import { TagProp, BoxProps } from "./types";
import { Text, FontAwesomeIcon } from "~/src/components/ui";

const Wrapper: TagProp = "div";
const Container: TagProp = "div";
const className: string = "box";
const containerClassName: string = `${className}__container`;

function box(props: BoxProps): JSX.Element {
  const { iconClassName, text } = props;
  return (
    <Wrapper className={className}>
      <Container className={containerClassName}>
        <FontAwesomeIcon className={iconClassName} />
      </Container>
      <Text as="p" text={text} />
    </Wrapper>
  );
}

export default box;
