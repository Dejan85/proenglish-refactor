import React from "react";
import { WrapperType } from "~/src/global-types";
import { FontAwesomeIcon } from "~/src/components/ui";
import { InfoProps } from "./types";

const Wrapper: WrapperType = "div";
const Text: WrapperType = "p";
const className: string = "calendar-info";

const Info = (props: InfoProps): JSX.Element => {
  const { time, title } = props;
  return (
    <Wrapper className={className}>
      <Wrapper className="calendar-info__heading">{title}</Wrapper>
      <Wrapper className="calendar-info__time">
        <FontAwesomeIcon className="far fa-clock calendar-info__icon" />
        <Text className="calendar-info__text">{time}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default Info;
