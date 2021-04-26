import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
// import "react-datepicker/dist/react-datepicker.css";

import { CalendarProps } from "./types";

const CalendarUi = (props: CalendarProps): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());

  registerLocale("en-GB", enGB);

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
      locale={"en-GB"}
    />
  );
};

export default CalendarUi;
