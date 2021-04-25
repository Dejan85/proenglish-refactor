import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  CalendarUi,
  Text,
  Button,
} from "~/src/components/ui";
import { CalendarOfEventsWidget } from "~/src/widgets/index";
import { UiRenderProps } from "../types";

const RenderUi = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
    filteredDailyEventsData,
    eventsData,
  } = props;

  const { highlightDates } = filteredActiveEventsDates;

  console.log("test", filteredDailyEventsData);

  const onChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchedEvents =
      eventsData &&
      eventsData.filter((item: any) => {
        if (item.title.toLowerCase().includes(searchTerm)) {
          return item;
        }
      });

    console.log("test", searchedEvents);

    // setTest(!searchTerm ? null : x);
  };

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
          <CalendarOfEventsWidget
            highlightDates={highlightDates}
            generateHighlhtDates={generateHighlhtDates}
            generateDailyEvents={generateDailyEvents}
          />
        </ContentContainer>

        <ContentContainer className="events__nav">
          <Button className="events__nav-button" type="button">
            Dnevni
          </Button>
          <Button className="events__nav-button" type="button">
            Nedeljni
          </Button>
          <Button className="events__nav-button" type="button">
            Mesečni
          </Button>
        </ContentContainer>

        <ContentContainer className="events__search">
          <input
            className="events__search-input"
            onChange={onChange}
            placeholder="Pretraga"
          />
        </ContentContainer>
        <Heading className="events__heading-h2" as="h2">
          Dešavanja koja su trenutno aktuelna
        </Heading>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
