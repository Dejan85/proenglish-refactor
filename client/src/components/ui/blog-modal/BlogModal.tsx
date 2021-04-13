import React from "react";
import { WrapperType } from "~/src/global-types";
import { BlogModalProps } from "./types";

const Wrapper: WrapperType = "div";

const BlogModal = (props: BlogModalProps) => {
  const { children } = props;
  const className = "blog-modal";
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default BlogModal;
