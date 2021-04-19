import React from "react";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const Heading: WrapperType = "p";
const Time: WrapperType = "div";
const Text: WrapperType = "p";
const className: string = "calendar-description";

const Description = (props: {
  date: string;
  time: string;
  title: string;
}): JSX.Element => {
  const { time, title } = props;

  return (
    <Wrapper className={className}>
      <Heading className="calendar-description__heading">{title}</Heading>
      <Time className="calendar-description__time">
        <Text className="calendar-description__text">{time}</Text>
      </Time>
    </Wrapper>
  );
};

export default Description;
