import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  Line,
} from "~/src/components/ui";
import { RenderUiProps } from "../types";

const BlogModal = () => {};

const RenderUi = (props: RenderUiProps): JSX.Element => {
  const { blogData } = props;
  console.log("test", blogData);

  return (
    <ContentContainer className="blog">
      <SubContainer className="blog__sub-container">
        <Heading className="blog__heading" as="h1">
          Blog
        </Heading>
        <Line>
          <Line.SmallLine />
          <Line.LargeLine />
        </Line>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
