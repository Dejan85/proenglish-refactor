import React from "react";
import Calendar from "react-calendar";
import { CalendarProps } from "./types";

const test = <div>test</div>;

const CalendarUi = (props: CalendarProps): JSX.Element => {
  const { filterEventsHandler } = props;

  const x = (s) => {
    if (filterEventsHandler) {
      filterEventsHandler(s);
    }
    return null;
  };

  return <Calendar tileContent={x} />;
};

export default CalendarUi;
