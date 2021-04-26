import React, { useState } from "react";
import { ContentContainer, CalendarInfo, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { MonthlyEventsProps } from "../types";

const MonthlyEvents = (props: MonthlyEventsProps) => {
  let [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const {
    filteredActiveEventsDates: { filteredEvents, highlightDates },
  } = props;
  console.log("test", filteredEvents);

  return (
    <ContentContainer className="events__monthly-content"></ContentContainer>
  );
};

export default MonthlyEvents;
