import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return <Loader type="Grid" color="#ee9a20" height={30} width={30} />;
};

export default Loading;
