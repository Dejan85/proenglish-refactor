import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  CalendarUi,
} from "~/src/components/ui";

const RenderUi = (): JSX.Element => {
  return (
    <ContentContainer className="events">
      <SubContainer className="events__sub-container">
        <Heading className="events__heading" as="h1">
          Budite u toku nasih i vasih desavanja.
        </Heading>
        <ContentContainer className="events__date-picker">
          date picker
          <CalendarUi />
        </ContentContainer>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
