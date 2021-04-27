import React from "react";
import { ContentContainer, CalendarInfo, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { DailyEventsProps } from "../types";

const DailyEvents = (props: DailyEventsProps): JSX.Element => {
  const { events } = props;

  return (
    <ContentContainer className="events__daily-events">
      {events?.length ? (
        events?.map((event: any) => {
          const { date, title, description, time } = event;
          return (
            <CalendarInfo
              className="events__daily-events-calendar-info"
              key={uniqid()}
            >
              <CalendarInfo.Card date={date} />
              <CalendarInfo.Content
                date={`${date}. ${time}`}
                title={title}
                description={description}
                icon="far fa-clock"
              />
            </CalendarInfo>
          );
        })
      ) : (
        <Text className="events__daily-events-no-events-text" as="p">
          Nema događaja.
        </Text>
      )}
    </ContentContainer>
  );
};

export default DailyEvents;
