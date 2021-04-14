import React from "react";
import uniqid from "uniqid";
import { Link as LinkRouter } from "react-router-dom";
import { Line, BlogModal, Image, Link, Text } from "~/src/components/ui";
import { FormatTime } from "~/src/utils/moment";
import { SubStr } from "~/src/utils/SubStr";
import { Heading, SubContainer, ContentContainer } from "~/src/components/ui";
import { headingText } from "../messages";

const RenderModal = (props: { children: object[] }): JSX.Element => {
  const { children: data } = props;
  return (
    <>
      {data.slice(0, 4).map(
        (item: any): JSX.Element => (
          <BlogModal key={uniqid()}>
            <Image
              alt="img"
              src={item.photo}
              type="base64"
              className="height--30rem"
            />
            <Link
              as={LinkRouter}
              className="no-background-color modal-link"
              to="/"
            >
              {item.title}
            </Link>
            <Text as="p" className="blog-modal-text">
              <SubStr>{item.description}</SubStr>
            </Text>
            <Line className="align-item-flex-start">
              <Line.SmallLine />
            </Line>
            <Text as="span">
              <FormatTime>{item.created}</FormatTime>
            </Text>
          </BlogModal>
        )
      )}
    </>
  );
};

const RenderLine = (
  <Line>
    <Line.SmallLine />
    <Line.LargeLine />
  </Line>
);

export const RenderUi = (props: { children: object[] }): JSX.Element => {
  const { children } = props;

  return (
    <>
      <SubContainer className="flex-direction-column">
        <ContentContainer className="justify-content-center flex-direction-column">
          <Heading as="h1" className="default-heading">
            {headingText}
          </Heading>
          {RenderLine}
        </ContentContainer>
        <ContentContainer className="reset-margin-top">
          <RenderModal>{children}</RenderModal>
        </ContentContainer>
      </SubContainer>
    </>
  );
};