import React from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { CalendarProps } from "./types";

const CalendarUi = (props: CalendarProps): JSX.Element => {
  const { highlightDates, generateHighlhtDates, generateDailyEvents } = props;

  return (
    <DatePicker
      onChange={generateDailyEvents}
      onMonthChange={generateHighlhtDates}
      inline
      highlightDates={highlightDates}
    />
  );
};

export default CalendarUi;
