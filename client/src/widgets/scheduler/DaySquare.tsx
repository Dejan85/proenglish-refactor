import React from "react";
import { ContentContainer, Text } from "~/src/components/ui";
import { DaySquareProps } from "./types";

const DaySquare = (props: DaySquareProps) => {
  const { day, sortedEvents, className: customClassName } = props;
  console.log("test sortedEvents", sortedEvents);

  return (
    <ContentContainer className={`scheduler__day-square ${customClassName}`}>
      <Text className="scheduler__day-square-text" as="p">
        {day}
      </Text>
      {sortedEvents?.map((event) => (
        <Text as="p">{event.title}</Text>
      ))}
    </ContentContainer>
  );
};

export default DaySquare;
