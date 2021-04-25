import React from "react";
import { ContentContainer, CalendarInfo, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { EventsContentProps } from "../types";

const EventsContent = (props: EventsContentProps): JSX.Element => {
  const { events } = props;

  return (
    <ContentContainer className="events__content">
      {events?.length ? (
        events?.map((event: any) => {
          const { date, title, description, time } = event;
          return (
            <CalendarInfo
              className="events__content-calendar-info"
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
        <Text as="p">Nema događaja.</Text>
      )}
    </ContentContainer>
  );
};

export default EventsContent;
