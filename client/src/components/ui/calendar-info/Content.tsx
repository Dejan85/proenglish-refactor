import React from "react";
import { WrapperType } from "~/src/global-types";
import {
  Heading,
  FontAwesomeIcon,
  Text,
  ContentContainer,
} from "~/src/components/ui";
import { ContentProps } from "./types";

const Wrapper: WrapperType = "div";
const className: string = "calendar-content";

const Content = (props: ContentProps) => {
  const { title, date, description, icon } = props;

  console.log("test", icon);

  return (
    <Wrapper className={className}>
      <Heading className="calendar-content__heading" as="h1">
        {title}
      </Heading>
      <ContentContainer className="calendar-content__date-container">
        <FontAwesomeIcon className={`${icon} calendar-content__icon`} />
        <Text className="calendar-content__date" as="span">
          {date}
        </Text>
      </ContentContainer>
      <Text as="p" className="calendar-content__description">
        {description}
      </Text>
    </Wrapper>
  );
};

export default Content;
