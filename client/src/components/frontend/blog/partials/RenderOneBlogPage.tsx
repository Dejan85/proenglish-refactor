import React from "react";
import parse from "html-react-parser";
import { RenderOneBlogPageProps } from "../types";

const RenderOneBlogPage = (props: RenderOneBlogPageProps) => {
  const { oneBlogData } = props;
  console.log("test", oneBlogData);

  return <div></div>;
};

export default RenderOneBlogPage;
