import React, { useEffect, useMemo } from "react";
import "./styles.scss";
import RenderUi from "./partials/RenderUi";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "../home/pages/blog/selectors";
import { BLOG_SCOPE } from "./constants";
import { reducer, fetchBlogData } from "../home/pages/blog/slice";
import saga from "../home/pages/blog/saga";

const Blog = () => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { blogData } = useSelector((state) => getBlogData(state, BLOG_SCOPE));

  const MemoizedUi = useMemo(() => <RenderUi blogData={blogData} />, [
    blogData,
  ]);

  useEffect(() => {
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, []);

  return MemoizedUi;
};

export default Blog;
