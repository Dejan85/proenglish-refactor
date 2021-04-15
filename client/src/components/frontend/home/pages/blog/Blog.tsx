import React, { useEffect, useMemo } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "./selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "./slice";
import saga from "./saga";
import { RenderUi } from "./helpers";
import { Loading } from "~/src/components/ui";

const Blog = (): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  const MemoizedUi = useMemo(
    () => (blogData.length ? <RenderUi>{blogData}</RenderUi> : <Loading />),
    [blogData]
  );

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return MemoizedUi;
};

export default Blog;
