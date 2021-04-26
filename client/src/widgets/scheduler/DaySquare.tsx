import React from "react";
import { ContentContainer, Text } from "~/src/components/ui";
import { DaySquareProps } from "./types";
import uniqid from "uniqid";
import { Scrollbars } from "react-custom-scrollbars";

const DaySquare = (props: DaySquareProps) => {
  const { day, sortedEvents, className: customClassName } = props;
  // console.log("test sortedEvents", sortedEvents);

  return (
    <ContentContainer className={`scheduler__day-square ${customClassName}`}>
      <Scrollbars>
        <Text className="scheduler__day-square-text" as="p">
          {day}
        </Text>
        {sortedEvents?.map((event: any) => (
          <ContentContainer
            className="scheduler__day-square-content"
            key={uniqid()}
          >
            <Text className="scheduler__day-square-content-text" as="p">
              {event.time}
            </Text>
            <Text className="scheduler__day-square-content-text" as="p">
              {event.title}
            </Text>
          </ContentContainer>
        ))}
      </Scrollbars>
    </ContentContainer>
  );
};

export default DaySquare;
