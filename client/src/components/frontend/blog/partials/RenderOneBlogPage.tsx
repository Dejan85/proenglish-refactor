import React from "react";
import parse from "html-react-parser";
import { RenderOneBlogPageProps } from "../types";
import { SubContainer, ContentContainer, Heading } from "~/src/components/ui";
import uniqueId from "uniqid";

const RenderOneBlogPage = (props: RenderOneBlogPageProps): JSX.Element => {
  const { oneBlogData } = props;
  console.log("test", oneBlogData[0]);

  return (
    <>
      {oneBlogData?.map((blog: any) => (
        <SubContainer className="blog-pages" key={uniqueId()}>
          <Heading className="blog-pages__heading" as="h1">
            {blog.title}
          </Heading>
        </SubContainer>
      ))}
    </>
  );
};

export default RenderOneBlogPage;
