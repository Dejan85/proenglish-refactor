import React, { useEffect } from "react";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useSelector, useDispatch } from "react-redux";
import { getBlogData } from "../home/pages/blog/selectors";
import { BLOG_SCOPE } from "./constants";
import {
  reducer,
  getOneBlogAction,
  fetchBlogData,
} from "../home/pages/blog/slice";
import saga from "../home/pages/blog/saga";
import { withRouter } from "react-router-dom";
import RenderOneBlogPage from "./partials/RenderOneBlogPage";
import { Loading } from "~/src/components/ui";

const BlogPage = (props: any): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { match } = props;
  const { blogData, oneBlogData } = useSelector(getBlogData);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, []);

  useEffect(() => {
    dispatch(getOneBlogAction(match.params.blogId));
  }, [blogData]);

  return oneBlogData?.length ? (
    <RenderOneBlogPage oneBlogData={oneBlogData} />
  ) : (
    <Loading height="100vh" />
  );
};

export default withRouter(BlogPage);
