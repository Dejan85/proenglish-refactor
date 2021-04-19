import React from "react";
import moment from "moment";

const months = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "jun",
  "jul",
  "avgust",
  "semptembar",
  "oktobar",
  "novembar",
  "decembar",
];

export const FormatTime = (props: { children: Date }): JSX.Element => {
  const { children } = props;
  const time = moment(children).format("DD. MMMM YYYY.");
  return <>{time}</>;
};

export const filterEventsForCurrentMonth = (
  events = [{ date: "" }],
  currentDate = new Date()
): { date: string }[] => {
  const currentMonth = currentDate.getMonth();
  const filterEvents = events.filter((event) => {
    const { date } = event;

    const dateMatch = date.match(months[currentMonth]);
    if (dateMatch && dateMatch[0]) {
      return event;
    }
  });
  return filterEvents;
};

export const filterEventsForCurrentDay = (
  events = [{ date: "" }],
  currentDate = new Date()
): { date: string }[] => {
  const currentMonth = currentDate.getMonth();
  const filterEvents = events.filter((event) => {
    const { date } = event;

    const dateMatch = date.match(months[currentMonth]);
    if (dateMatch && dateMatch[0]) {
      return event;
    }
  });
  return filterEvents;
};
