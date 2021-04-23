import React from "react";
import parse from "html-react-parser";
import { RenderOneBlogPageProps } from "../types";
import {
  SubContainer,
  ContentContainer,
  Heading,
  Text,
  Image,
} from "~/src/components/ui";
import uniqueId from "uniqid";
import useScrollIndicator from "~/src/utils/useScrollIndicator";

const RenderOneBlogPage = (props: RenderOneBlogPageProps): JSX.Element => {
  const { scrollIndicator } = useScrollIndicator();
  const { oneBlogData } = props;

  return (
    <>
      {scrollIndicator()}
      {oneBlogData?.map((blog: any) => (
        <SubContainer className="blog-pages" key={uniqueId()}>
          <Heading className="blog-pages__heading" as="h1">
            {blog.title}
          </Heading>
          <ContentContainer className="blog-pages__created-container">
            <Text className="blog-pages__created" as="span">
              {blog.created}
            </Text>
            <Text
              className="blog-pages__created blog-pages__created--margin-left"
              as="span"
            >
              Post: {blog.postedBy}
            </Text>
          </ContentContainer>
          <ContentContainer className="blog-pages__image-container">
            <Image
              className="blog-page__image"
              type="base64"
              alt="img"
              src={blog.photo}
              disablelazyLoad
            />
          </ContentContainer>
          <ContentContainer className="blog-pages__text">
            {parse(blog.body)}
          </ContentContainer>
        </SubContainer>
      ))}
    </>
  );
};

export default RenderOneBlogPage;
