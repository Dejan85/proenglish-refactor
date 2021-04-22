import React, { useEffect } from "react";
import "./styles.scss";
import { ContentContainer } from "~/src/components/ui";
import parse from "html-react-parser";

const Exams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ContentContainer>exams</ContentContainer>;
};

export default Exams;
