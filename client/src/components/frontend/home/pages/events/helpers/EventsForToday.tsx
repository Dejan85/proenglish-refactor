import React from "react";
import { ContentContainer, Heading, CalendarInfo } from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";

const EventsForToday = (props): JSX.Element => {
  const { filteredDailyEventsData } = props;

  console.log("test filteredDailyEventsData", filteredDailyEventsData);

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
        <CalendarInfo>
          <CalendarInfo.Description />
        </CalendarInfo>
        <CalendarInfo>
          <CalendarInfo.Description />
        </CalendarInfo>
      </Scrollbars>
    </ContentContainer>
  );
};

export default EventsForToday;
