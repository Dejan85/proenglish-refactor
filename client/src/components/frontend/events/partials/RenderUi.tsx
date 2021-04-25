import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  CalendarUi,
  Text,
} from "~/src/components/ui";
import { CalendarOfEventsWidget } from "~/src/widgets/index";
import { UiRenderProps } from "../types";

const RenderUi = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
    filteredDailyEventsData,
  } = props;

  const { highlightDates } = filteredActiveEventsDates;

  return (
    <ContentContainer className="events">
      <SubContainer className="events__sub-container">
        <Heading className="events__heading" as="h1">
          Budite u toku nasih i vasih desavanja.
        </Heading>
        <ContentContainer className="events__date-picker">
          <Text className="events__date-picker-heading" as="p">
            Izaberi daatum
          </Text>
          {/* <CalendarUi /> */}
          <CalendarOfEventsWidget
            highlightDates={highlightDates}
            generateHighlhtDates={generateHighlhtDates}
            generateDailyEvents={generateDailyEvents}
          />
        </ContentContainer>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
