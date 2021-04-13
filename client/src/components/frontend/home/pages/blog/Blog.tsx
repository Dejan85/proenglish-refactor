import React, { useEffect, useState } from "react";
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
  BlogModal,
  Image,
} from "~/src/components/ui";
import { headingText } from "./messages";

const renderLine = (): JSX.Element => <Line />;
const lineUi = renderLine();

const Blog = (): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });

  const [image, setImage] = useState<string>("");

  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  console.log("test", "render");
  console.log("test", blogData);

  return (
    <SubContainer>
      <ContentContainer className="justify-content-center flex-direction-column">
        <Heading as="h1" className="default-heading">
          {headingText}
        </Heading>
        {lineUi}
        <BlogModal>
          <Image type="base64" />
        </BlogModal>
      </ContentContainer>
    </SubContainer>
  );
};

export default Blog;
