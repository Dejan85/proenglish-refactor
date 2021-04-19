import React from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { CalendarProps } from "./types";

const CalendarUi = (props: CalendarProps): JSX.Element => {
  const { highlightDates, generateHighlhtDates } = props;

  const onChangeHandler = (e) => {
    console.log("test", e);
  };

  return (
    <DatePicker
      onChange={onChangeHandler}
      onMonthChange={generateHighlhtDates}
      inline
      highlightDates={highlightDates}
    />
  );
};

export default CalendarUi;
