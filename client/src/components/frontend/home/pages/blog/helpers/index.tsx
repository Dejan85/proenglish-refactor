import React from "react";
import uniqid from "uniqid";
import { Link as LinkRouter } from "react-router-dom";
import { Line, BlogModal, Image, Link, Text } from "~/src/components/ui";
import { FormatTime } from "~/src/utils/moment";
import { SubStr } from "~/src/utils/SubStr";
import { Heading, SubContainer, ContentContainer } from "~/src/components/ui";
import { headingText } from "../messages";
import { Loading } from "~/src/components/ui";

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
              className="no-background-color heading-link"
              to="/"
            >
              {item.title}
            </Link>

            <ContentContainer padding="0 1rem">
              <Text as="p" className="blog-modal-text">
                <SubStr>{item.description}</SubStr>
              </Text>
            </ContentContainer>

            <Line className="align-item-flex-start reset-padding-bottom">
              <Line.SmallLine />
            </Line>

            <ContentContainer marginTop="1rem" padding="0 1rem">
              <Text as="span" className="blog-modal-span">
                <FormatTime>{item.created}</FormatTime>
              </Text>
            </ContentContainer>

            <ContentContainer marginTop="1rem" padding="0 1rem">
              <Text as="span" className="blog-modal-span poppins-sans-serif">
                by
              </Text>
              <Text
                as="span"
                className="blog-modal-span text-orange poppins-sans-serif"
              >
                {item.postedBy}
              </Text>
            </ContentContainer>
          </BlogModal>
        )
      )}
    </>
  );
};

const RenderLine: JSX.Element = (
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
        <ContentContainer
          flexDirection="column"
          justifyContent="center"
          marginTop="10rem"
        >
          <Heading as="h1" className="default-heading">
            {headingText}
          </Heading>
          {RenderLine}
        </ContentContainer>
        <ContentContainer justifyContent="space-between">
          {children.length ? (
            <RenderModal>{children}</RenderModal>
          ) : (
            <Loading />
          )}
        </ContentContainer>
      </SubContainer>
    </>
  );
};
