import React from "react";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useSelector, useDispatch } from "react-redux";
import { getBlogData } from "../home/pages/blog/selectors";
import { ONE_BLOG_DATA_SCOPE } from "./constants";
import { reducer, getOneBlogAction } from "../home/pages/blog/slice";
import saga from "../home/pages/blog/saga";

import { withRouter } from "react-router-dom";
import parse from "html-react-parser";

const BlogPage = (props) => {
  useInjectReducer({ key: ONE_BLOG_DATA_SCOPE, reducer });
  useInjectSaga({ key: ONE_BLOG_DATA_SCOPE, saga });
  const dispatch = useDispatch();
  const { match } = props;
  const { oneBlogData } = useSelector((state) =>
    getBlogData(state, ONE_BLOG_DATA_SCOPE)
  );

  console.log("test", match.params.blogId);

  console.log("test", oneBlogData);

  return <div className="text">xad</div>;
};

export default withRouter(BlogPage);
