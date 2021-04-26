import React from "react";
import { ContentContainer, Text } from "~/src/components/ui";

const DaySquare = (props) => {
  const { day, className: customClassName } = props;
  return (
    <ContentContainer className={`scheduler__day-square ${customClassName}`}>
      <Text className="scheduler__day-square-text" as="p">
        {day}
      </Text>
    </ContentContainer>
  );
};

export default DaySquare;
