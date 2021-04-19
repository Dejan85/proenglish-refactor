import React from "react";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "calendar-card";

const Card = (props): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Wrapper className="calendar-card__num">{2}</Wrapper>
      <Wrapper className="calendar-card__month">april</Wrapper>
    </Wrapper>
  );
};

export default Card;
