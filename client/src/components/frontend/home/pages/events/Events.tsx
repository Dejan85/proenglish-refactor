import React from "react";
import { SubContainer, ContentContainer, Heading } from "~/src/components/ui";

const MemoizedUi: JSX.Element = (
  <SubContainer>
    <ContentContainer marginTop="10rem" outline="1px solid red">
      <Heading className="h2" as="h2">
        Kalendar događaja
      </Heading>
    </ContentContainer>

    <ContentContainer marginTop="10rem" outline="1px solid red">
      <Heading className="h2" as="h2">
        Mesečni događaji
      </Heading>
    </ContentContainer>

    <ContentContainer marginTop="10rem" outline="1px solid red">
      <Heading className="h2" as="h2">
        Događaji za današnji dan
      </Heading>
    </ContentContainer>
  </SubContainer>
);

const Events = (): JSX.Element => {
  return MemoizedUi;
};

export default Events;
