import React, { useState } from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  Text,
  Button,
  CalendarInfo,
} from "~/src/components/ui";
import { CalendarOfEventsWidget } from "~/src/widgets/index";
import { UiRenderProps } from "../types";
import uniqid from "uniqid";

const RenderUi = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
    filteredDailyEventsData,
    eventsData,
  } = props;
  const [active, setActive] = useState<string>("daily");

  const { highlightDates } = filteredActiveEventsDates;

  const onChange = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchedEvents =
      eventsData &&
      eventsData.filter((item: any) => {
        if (item.title.toLowerCase().includes(searchTerm)) {
          return item;
        }
      });

    console.log("test", searchedEvents);
  };

  const navHandler = (e: {
    target: { name: React.SetStateAction<string> };
  }) => {
    setActive(e.target.name);
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
          <Button
            onClick={navHandler}
            className={`events__nav-button ${
              active === "daily" && "events__nav-button-active"
            }`}
            type="button"
            name="daily"
          >
            Dnevni
          </Button>
          <Button
            onClick={navHandler}
            className={`events__nav-button ${
              active === "weekly" && "events__nav-button-active"
            }`}
            type="button"
            name="weekly"
          >
            Nedeljni
          </Button>
          <Button
            onClick={navHandler}
            className={`events__nav-button ${
              active === "monthly" && "events__nav-button-active"
            }`}
            type="button"
            name="monthly"
          >
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
        <ContentContainer className="events__content">
          {filteredDailyEventsData?.map((event: any) => {
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
          })}
        </ContentContainer>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
