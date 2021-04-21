import React from "react";
import {
  SubContainer,
  Heading,
  Text,
  ContentContainer,
} from "~/src/components/ui";
import { heading, firstTwoPar, anotherThreePar } from "./messages";
import uniqid from "uniqid";

const RenderUi = (): JSX.Element => {
  return (
    <ContentContainer className="pricelist">
      <SubContainer className="pricelist__content">
        <Heading className="pricelist__heading" as="h1">
          {heading}
        </Heading>
        {firstTwoPar.map((text): any => {
          return (
            <Text key={uniqid()} className="pricelist__text" as="p">
              {text}
            </Text>
          );
        })}
      </SubContainer>
    </ContentContainer>
  );
};

const Pricelist = () => {
  return <RenderUi />;
};

export default Pricelist;
