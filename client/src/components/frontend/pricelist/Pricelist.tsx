import React, { useEffect } from "react";
import {
  SubContainer,
  Heading,
  Text,
  ContentContainer,
} from "~/src/components/ui";
import TableRow from "../../deprecate/table-row/TableRow";
import { heading, firstTwoPar, anotherThreePar, tableData } from "./messages";
import uniqid from "uniqid";

const RenderUi = (): JSX.Element => {
  return (
    <ContentContainer className="pricelist">
      <SubContainer className="pricelist__content">
        <Heading className="pricelist__heading" as="h1">
          {heading}
        </Heading>
        <>
          {firstTwoPar.map((text) => (
            <Text key={uniqid()} className="pricelist__text" as="p">
              {text}
            </Text>
          ))}
        </>

        <ContentContainer className="pricelist__table">
          {tableData.map(({ heading, rows }, index) => {
            return <TableRow heading={heading} rows={rows} key={index} />;
          })}
        </ContentContainer>

        <>
          {anotherThreePar.map((text) => (
            <Text key={uniqid()} className="pricelist__text" as="p">
              {text}
            </Text>
          ))}
        </>
      </SubContainer>
    </ContentContainer>
  );
};

const Pricelist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <RenderUi />;
};

export default Pricelist;
