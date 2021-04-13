import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";

const Image = (props: ImageProps): JSX.Element => {
  const { src: srcProp, alt, type = "img", className: customClassName } = props;

  const base64: string = `data:image/png;base64,${srcProp}`;
  const src: string = type === "base64" ? base64 : srcProp;
  const className: string = "image";

  return (
    <Wrapper
      className={
        customClassName
          ? `${className} ${className} ${customClassName}`
          : className
      }
    >
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
