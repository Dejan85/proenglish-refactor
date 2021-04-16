import React from "react";
import { CalendarCardProps } from "./types";
import { WrapperType } from "~/src/global-types";
import Info from "./info";
import Card from "./Card";
import Description from "./Description";

const Wrapper: WrapperType = "div";
const className: string = "calendar-info";

const CalendarInfo = (props: CalendarCardProps): JSX.Element => {
  const { children } = props;

  return <Wrapper className={className}>{children}</Wrapper>;
};

CalendarInfo.Card = Card;
CalendarInfo.Info = Info;
CalendarInfo.Description = Description;

export default CalendarInfo;
