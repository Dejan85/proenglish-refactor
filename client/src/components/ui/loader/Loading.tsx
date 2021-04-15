import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";

const Loading = () => {
  return (
    <Wrapper className="loader">
      <Loader type="Grid" color="#ee9a20" height={30} width={30} />
    </Wrapper>
  );
};

export default Loading;
