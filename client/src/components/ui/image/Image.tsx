import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "image";

const Image = (props: ImageProps): JSX.Element => {
  const { src, alt } = props;

  return (
    <Wrapper className={className}>
      <LazyLoadImage
        alt={alt}
        src={src}
        useIntersectionObserver={true}
        width={"100%"}
      />
    </Wrapper>
  );
};

export default Image;
