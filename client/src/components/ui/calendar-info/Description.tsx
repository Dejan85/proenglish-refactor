import React from "react";
import { WrapperType } from "~/src/global-types";
import { FontAwesomeIcon } from "~/src/components/ui";

const Wrapper: WrapperType = "div";
const Heading: WrapperType = "p";
const Time: WrapperType = "div";
const Text: WrapperType = "p";
const className: string = "calendar-description";

const Description = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Heading className="calendar-description__heading">
        GRE General Test
      </Heading>
      <Time className="calendar-description__time">
        <Text className="calendar-description__text">Petak 09:00</Text>
      </Time>
    </Wrapper>
  );
};

export default Description;
