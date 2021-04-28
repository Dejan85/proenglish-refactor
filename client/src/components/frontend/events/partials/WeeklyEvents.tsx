import React, { memo, useEffect, useState } from "react";
import { ContentContainer, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { week } from "../constants";
import { WeeklyEventsProps } from "../types";
import { Scrollbars } from "react-custom-scrollbars";

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

let wd: number;
const weekDays: number[] = [];

const WeeklyEvents = (props: WeeklyEventsProps): JSX.Element => {
  const { events } = props;
  const [weeklyEvents, setWeeklyEvents] = useState<object[]>([]);
  let counter: number = 1;

  useEffect(() => {
    const weeklyEvent = events?.filter((event: any) => {
      for (let i = 0; i <= weekDays.length; i++) {
        if (Number(event.date.slice(0, 2)) === weekDays[i]) {
          return event;
        }
      }
    });
    setWeeklyEvents(weeklyEvent);
  }, [weekDays, events]);

  return (
    <ContentContainer className="events__weekly-content">
      {week.map(
        (day: string, index: number): JSX.Element => {
          if (Number(firstday) + index <= daysInMonth) {
            wd = Number(firstday) + index;
            if (weekDays.indexOf(wd) === -1) {
              weekDays.push(wd);
            }
          } else {
            wd = counter++;
            if (weekDays.indexOf(wd) === -1) {
              weekDays.push(wd);
            }
          }

          return (
            <ContentContainer key={uniqid()} className="events__weekdays">
              <Text className="events__weekdays-header" as="p">
                {`${wd}. ${day}`}
              </Text>
              <ContentContainer className="events__weekdays-content">
                <Scrollbars>
                  {weeklyEvents?.map((event: any) => {
                    if (Number(event.date.slice(0, 2)) === wd) {
                      return (
                        <ContentContainer
                          className="events__weekdays-content-event-container"
                          key={uniqid()}
                        >
                          <Text
                            className="events__weekdays-content-event-text events__weekdays-content-event-text--bold"
                            as="p"
                          >
                            {event.time}
                          </Text>
                          <Text
                            className="events__weekdays-content-event-text"
                            as="p"
                          >
                            {event.title}
                          </Text>
                        </ContentContainer>
                      );
                    }
                  })}
                </Scrollbars>
              </ContentContainer>
            </ContentContainer>
          );
        }
      )}
    </ContentContainer>
  );
};

export default memo(WeeklyEvents);
