import React, { useEffect } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "./selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "./slice";
import saga from "./saga";

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
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });

  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

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
