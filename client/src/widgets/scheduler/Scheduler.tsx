import React from "react";
import "./styles.scss";
import { ContentContainer, Text } from "~/src/components/ui";
import { weeksDays } from "./constants";
import uniqid from "uniqid";
import { SchedulerProps } from "./types";
import DaySquare from "./DaySquare";

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

const test: JSX.Element[] = [];

for (let i = 1; i <= paddingDays + daysInMonth; i++) {
  if (i > paddingDays) {
    test.push(<DaySquare key={uniqid()} day={i - paddingDays} />);
  } else {
    test.push(
      <DaySquare key={uniqid()} className="scheduler__day-square-padding" />
    );
  }
}

const Wd = weeksDays.map(
  (day): JSX.Element => (
    <Text className="scheduler__weekdays-day" key={uniqid()} as="p">
      {day}
    </Text>
  )
);

const Scheduler = (props: SchedulerProps) => {
  const { events } = props;
  console.log("test", events);

  return (
    <ContentContainer className="scheduler">
      <ContentContainer className="scheduler__weekdays">{Wd}</ContentContainer>
      <ContentContainer className="scheduler__calendar">
        {...test}
      </ContentContainer>
    </ContentContainer>
  );
};

export default Scheduler;
