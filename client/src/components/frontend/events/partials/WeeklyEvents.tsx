import React from "react";
import { ContentContainer, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { week } from "../constants";

const date: Date = new Date();
const month: number = date.getMonth();
const year: number = date.getFullYear();
const daysInMonth: number = new Date(year, month + 1, 0).getDate();
const first: number = date.getDate() - date.getDay() + 1;
const last: number = first + 6;
const firstday = new Date(date.setDate(first)).toLocaleDateString("en-GB", {
  day: "numeric",
});
const lastday = new Date(date.setDate(last)).toLocaleDateString("en-GB", {
  day: "numeric",
});

let counter: number = 1;

const Wd = week.map(
  (day: string, index: number): JSX.Element => {
    let wd: number;
    if (Number(firstday) + index <= daysInMonth) {
      wd = Number(firstday) + index;
    } else {
      wd = counter++;
    }

    return (
      <Text className="scheduler__weekdays-day" key={uniqid()} as="p">
        {`${wd}. ${day}`}
      </Text>
    );
  }
);

const WeeklyEvents = () => {
  return (
    <ContentContainer className="events__weekly-content">
      <ContentContainer className="scheduler__weekdays">{Wd}</ContentContainer>
    </ContentContainer>
  );
};

export default WeeklyEvents;
