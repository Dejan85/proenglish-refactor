import React from "react";
import { ContentContainer, Heading, CalendarInfo } from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";
import uniqid from "uniqid";
import { EventTypes, RenderProps, UiRenderProps } from "../types";

const Render = (props: RenderProps): JSX.Element => {
  const { filteredEvents } = props;
  return (
    <>
      {filteredEvents?.map(
        (event: EventTypes): JSX.Element => {
          const { time, title } = event;
          return (
            <CalendarInfo key={uniqid()}>
              <CalendarInfo.Card />
              <CalendarInfo.Info time={time} title={title} />
            </CalendarInfo>
          );
        }
      )}
    </>
  );
};

const MonthlyEvents = (props: UiRenderProps): JSX.Element => {
  const {
    filteredActiveEventsDates: { filteredEvents },
  } = props;

  return (
    <ContentContainer
      flexDirection="column"
      maxWidth="30rem"
      height="57rem"
      marginTop="10rem"
      position="relative"
    >
      <Heading className="h2" as="h2">
        Mesečni događaji
      </Heading>

      <Scrollbars
        style={{ marginTop: "6.2rem" }}
        renderThumbVertical={() => <div style={{ background: "#474642" }} />}
      >
        <Render filteredEvents={filteredEvents} />
      </Scrollbars>
    </ContentContainer>
  );
};

export default MonthlyEvents;
