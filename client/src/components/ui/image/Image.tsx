import React from "react";
import { ImageProps } from "./types";
import { WrapperType } from "~/src/global-types";
import { useLazyLoad } from "~/src/hooks/index";

const Wrapper: WrapperType = "div";

const Image = (props: ImageProps): JSX.Element => {
  const { src: srcProp, alt, type = "img", className: customClassName } = props;
  const base64: string = `data:image/png;base64,${srcProp}`;
  const src: string = type === "base64" ? base64 : srcProp;
  const className: string = "image";

  const options = { rootMargin: "500px" };
  const [ref, visible] = useLazyLoad(options);

  return (
    <Wrapper
      className={
        customClassName
          ? `${className} ${className} ${customClassName}`
          : className
      }
      ref={ref}
    >
      {visible && <img alt={alt} src={src} />}
    </Wrapper>
  );
};

export default Image;
