import React from "react";
import { CalendarCardProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "calendar-card";

const CalendarCard = (props: CalendarCardProps) => {
  const { children } = props;
  return (
    <Wrapper className={className}>
      <Wrapper className="calendar-card__num">{2}</Wrapper>
      <Wrapper className="calendar-card__month">april</Wrapper>
    </Wrapper>
  );
};

export default CalendarCard;
