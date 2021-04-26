import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { CalendarProps } from "./types";

const CalendarUi = (props: CalendarProps): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());

  const {
    highlightDates,
    generateHighlhtDates,
    generateDailyEvents,
    inline,
  } = props;

  const onChange = (date: Date) => {
    generateDailyEvents(date);
    setStartDate(date);
  };

  return (
    <DatePicker
      onChange={onChange}
      onMonthChange={generateHighlhtDates}
      inline={inline}
      highlightDates={highlightDates}
      selected={startDate}
      closeOnScroll={true}
    />
  );
};

export default CalendarUi;
