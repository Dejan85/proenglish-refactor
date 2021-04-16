import React from "react";
import { WrapperType } from "~/src/global-types";
import { FontAwesomeIcon } from "~/src/components/ui";

const Wrapper: WrapperType = "div";
const Text: WrapperType = "p";
const className: string = "calendar-info";

const Info = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Wrapper className="calendar-info__heading">GRE General Test</Wrapper>
      <Wrapper className="calendar-info__time">
        <FontAwesomeIcon className="far fa-clock calendar-info__icon" />
        <Text className="calendar-info__text">09:00</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default Info;
