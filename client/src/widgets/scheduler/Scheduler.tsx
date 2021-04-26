import React from "react";
import "./styles.scss";
import { ContentContainer, Text } from "~/src/components/ui";
import { weeksDays } from "./constants";
import uniqid from "uniqid";
import { SchedulerProps } from "./types";

let nav: number = 0;
const date: Date = new Date();
const day: number = date.getDate();
const month: number = date.getMonth();
const year: number = date.getFullYear();

const firstDayOfMonth: Date = new Date(year, month, 1);
const daysInMonth: number = new Date(year, month + 1, 0).getDate();

const dateString: string = firstDayOfMonth.toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const paddingDays = weeksDays.indexOf(dateString.split(",")[0]);

console.log("test", paddingDays);

const Wd = weeksDays.map((day) => (
  <Text className="scheduler__weekdays-day" key={uniqid()} as="p">
    {day}
  </Text>
));

const Scheduler = (props: SchedulerProps) => {
  const { events } = props;
  console.log("test", events);

  return (
    <ContentContainer className="scheduler">
      <ContentContainer className="scheduler__header"></ContentContainer>
      <ContentContainer className="scheduler__weekdays">{Wd}</ContentContainer>
      <ContentContainer className="scheduler__calendar"></ContentContainer>
    </ContentContainer>
  );
};

export default Scheduler;
