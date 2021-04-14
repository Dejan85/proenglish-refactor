import React, { useEffect } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "./selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "./slice";
import saga from "./saga";
import { renderLine, renderModal } from "./helpers";

import {
  Heading,
  SubContainer,
  ContentContainer,
  Line,
} from "~/src/components/ui";
import { headingText } from "./messages";

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
        <Line>
          <Line.SmallLine />
          <Line.LargeLine />
        </Line>
      </ContentContainer>
      <ContentContainer className="reset-margin-top">
        {blogData?.length && renderModal(blogData)}
      </ContentContainer>
    </SubContainer>
  );
};

export default Blog;
