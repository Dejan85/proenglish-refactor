import React, { useEffect } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "./selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "./slice";
import saga from "./saga";
import uniqid from "uniqid";

import {
  Heading,
  SubContainer,
  ContentContainer,
  Line,
  BlogModal,
  Image,
} from "~/src/components/ui";
import { headingText } from "./messages";

const renderLine = (): JSX.Element => <Line />;
const lineUi = renderLine();

const renderModal = (data: object[]): JSX.Element[] =>
  data.slice(0, 4).map(
    (item: any): JSX.Element => (
      <BlogModal key={uniqid()}>
        <Image
          alt="img"
          src={item.photo}
          type="base64"
          className="height--30rem"
        />
      </BlogModal>
    )
  );

const Blog = (): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });

  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return (
    <SubContainer className="flex-direction-column">
      <ContentContainer className="justify-content-center flex-direction-column">
        <Heading as="h1" className="default-heading">
          {headingText}
        </Heading>
        {lineUi}
      </ContentContainer>
      <ContentContainer className="reset-margin-top">
        {blogData?.length > 0 && renderModal(blogData)}
      </ContentContainer>
    </SubContainer>
  );
};

export default Blog;
