import React from "react";
import { CalendarCardProps } from "./types";
import { WrapperType } from "~/src/global-types";
import Info from "./Info";
import Card from "./Card";
import Description from "./Description";
import Content from "./Content";

const Wrapper: WrapperType = "div";
const className: string = "calendar-info";

const CalendarInfo = (props: CalendarCardProps): JSX.Element => {
  const { children, className: customClassName } = props;

  return (
    <Wrapper
      className={
        customClassName ? `${customClassName} ${className}` : className
      }
    >
      {children}
    </Wrapper>
  );
};

CalendarInfo.Card = Card;
CalendarInfo.Info = Info;
CalendarInfo.Description = Description;
CalendarInfo.Content = Content;

export default CalendarInfo;
