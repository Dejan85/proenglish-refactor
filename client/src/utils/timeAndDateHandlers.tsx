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
  const filterEvents = events
    .filter((event) => {
      const { date } = event;

      const dateMatch = date.match(months[currentMonth]);
      if (dateMatch && dateMatch[0]) {
        return event;
      }
    })
    .sort((a: any, b: any): any => {
      return a.date.slice(0, 2) - b.date.slice(0, 2);
    });

  return filterEvents;
};

export const filterEventsForCurrentDay = (
  currentDate = new Date(),
  events = [{ date: "" }]
): { date: string }[] => {
  const day: number = currentDate.getDate();

  const dailyEvents = events
    .filter((event): { date: string } | undefined => {
      if (Number(event.date.slice(0, 2)) === day) {
        return event;
      }
    })
    .sort((a: any, b: any): any => {
      return a.date.slice(0, 2) - b.date.slice(0, 2);
    });

  return dailyEvents;
};
