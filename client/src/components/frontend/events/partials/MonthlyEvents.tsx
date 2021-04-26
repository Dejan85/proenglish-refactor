import React, { useState } from "react";
import { ContentContainer, CalendarInfo, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { MonthlyEventsProps } from "../types";
import { Scheduler } from "~/src/widgets/index";

const MonthlyEvents = (props: MonthlyEventsProps) => {
  const {
    filteredActiveEventsDates: { filteredEvents },
    currentMonth,
  } = props;

  return (
    <ContentContainer className="events__monthly-content">
      <Scheduler events={filteredEvents} currentMonth={currentMonth} />
    </ContentContainer>
  );
};

export default MonthlyEvents;
