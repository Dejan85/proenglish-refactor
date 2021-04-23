import React, { useEffect } from "react";
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
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, []);

  return <RenderUi blogData={blogData} />;
};

export default Blog;
