import React from "react";
import {
  Heading,
  SubContainer,
  ContentContainer,
  Line,
} from "~/src/components/ui";
import { headingText } from "./messages";

const renderHeading = (): JSX.Element => (
  <Heading as="h1" text={headingText} className="default-heading" />
);

const renderLine = (): JSX.Element => <Line />;

const headingUi = renderHeading();
const lineUi = renderLine();

const Blog = (): JSX.Element => {
  return (
    <SubContainer>
      <ContentContainer className="justify-content-center flex-direction-column">
        {headingUi}
        {lineUi}
      </ContentContainer>
    </SubContainer>
  );
};

export default Blog;
