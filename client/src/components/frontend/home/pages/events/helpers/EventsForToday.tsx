import React from "react";
import {
  ContentContainer,
  Heading,
  CalendarInfo,
  Text,
  Link,
} from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";
import uniqid from "uniqid";

const Render = (props: {
  filteredDailyEventsData: object[];
}): JSX.Element | JSX.Element[] => {
  const { filteredDailyEventsData } = props;

  return (
    <>
      {filteredDailyEventsData?.length ? (
        filteredDailyEventsData.map((event: any) => {
          const { date, time, title } = event;

          return (
            <CalendarInfo key={uniqid()}>
              <CalendarInfo.Description date={date} time={time} title={title} />
            </CalendarInfo>
          );
        })
      ) : (
        <Text as="p">Nema događaja danas.</Text>
      )}
    </>
  );
};

const EventsForToday = (props: {
  filteredDailyEventsData: object[];
}): JSX.Element => {
  const { filteredDailyEventsData } = props;

  return (
    <ContentContainer
      flexDirection="column"
      maxWidth="40rem"
      height="57rem"
      marginTop="10rem"
    >
      <Heading className="h2" as="h2">
        Događaji za današnji dan
      </Heading>

      <Scrollbars
        style={{ marginTop: "6.2rem" }}
        renderThumbVertical={() => <div style={{ background: "#474642" }} />}
      >
        <Render filteredDailyEventsData={filteredDailyEventsData} />
      </Scrollbars>
      <Link as="a">Vidi Detaljno</Link>
    </ContentContainer>
  );
};

export default EventsForToday;
