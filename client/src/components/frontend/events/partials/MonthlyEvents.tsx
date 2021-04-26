import React from "react";
import { ContentContainer, CalendarInfo, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { MonthlyEventsProps } from "../types";

const MonthlyEvents = (props: MonthlyEventsProps) => {
  const { filteredActiveEventsDates } = props;
  console.log("test", filteredActiveEventsDates);

  return (
    <ContentContainer className="events__monthly-content">xad</ContentContainer>
  );
};

export default MonthlyEvents;
