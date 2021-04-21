import React, { useEffect, useMemo } from "react";
import "./styles.scss";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "./selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "./slice";
import saga from "./saga";
import { RenderUi } from "./helpers";

const Blog = (): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  const MemoizedUi = useMemo(() => <RenderUi blogData={blogData} />, [
    blogData,
  ]);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return MemoizedUi;
};

export default Blog;
