import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { WrapperType } from "~/src/global-types";
import { LoadingProps } from "./types";

const Wrapper: WrapperType = "div";

const Loading = (props: LoadingProps) => {
  const { height } = props;
  const style = { height };
  return (
    <Wrapper className="loader" style={style}>
      <Loader type="Grid" color="#ee9a20" height={30} width={30} />
    </Wrapper>
  );
};

export default Loading;
