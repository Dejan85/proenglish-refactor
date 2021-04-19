import React from "react";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "calendar-card";

const Card = (props): JSX.Element => {
  const { date } = props;

  return (
    <Wrapper className={className}>
      <Wrapper className="calendar-card__num">{date.slice(0, 2)}</Wrapper>
      <Wrapper className="calendar-card__month">{date.split(" ")[1]}</Wrapper>
    </Wrapper>
  );
};

export default Card;
