import React, { memo } from "react";
import "./styles.scss";
import { ContentContainer, Text } from "~/src/components/ui";
import { weeksDays } from "./constants";
import uniqid from "uniqid";
import { SchedulerProps } from "./types";
import DaySquare from "./DaySquare";

const Scheduler = (props: SchedulerProps) => {
  const { events, currentMonth } = props;

  const date: Date = currentMonth ? currentMonth : new Date();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  const firstDayOfMonth: Date = new Date(year, month, 1);
  const daysInMonth: number = new Date(year, month + 1, 0).getDate();

  const dateString: string = firstDayOfMonth.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const paddingDays: number = weeksDays.indexOf(dateString.split(",")[0]);

  const renderDays: JSX.Element[] = [];

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    if (i > paddingDays) {
      const sortedEvents = events?.filter((event: any) => {
        const date: number = Number(event.date.slice(0, 2));
        const day: number = i - paddingDays;
        if (day === date) {
          return event;
        }
      });
      renderDays.push(
        <DaySquare
          key={uniqid()}
          day={String(i - paddingDays)}
          sortedEvents={sortedEvents}
        />
      );
    } else {
      renderDays.push(
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

  return (
    <ContentContainer className="scheduler">
      <ContentContainer className="scheduler__weekdays">{Wd}</ContentContainer>
      <ContentContainer className="scheduler__calendar">
        {...renderDays}
      </ContentContainer>
    </ContentContainer>
  );
};

export default memo(Scheduler);
