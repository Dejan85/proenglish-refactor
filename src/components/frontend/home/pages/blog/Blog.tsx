import React from "react";
import { Heading, SubContainer, ContentContainer } from "~/src/components/ui";
import { headingText } from "./messages";

const renderHeading = (): JSX.Element => (
  <Heading as="h1" text={headingText} className="default-heading" />
);

const headingUi = renderHeading();

const Blog = (): JSX.Element => {
  return (
    <SubContainer>
      <ContentContainer className="justify-content-center">
        {headingUi}
      </ContentContainer>
    </SubContainer>
  );
};

export default Blog;
