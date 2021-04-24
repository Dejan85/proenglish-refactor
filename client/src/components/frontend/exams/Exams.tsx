import React, { useEffect } from "react";
import "./styles.scss";
import { ContentContainer } from "~/src/components/ui";
import parse from "html-react-parser";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useDispatch, useSelector } from "react-redux";
import { getExamsData } from "./selectors";
import { EXAMS_SCOPE } from "./contants";
import { fetchExamsData, reducer } from "./slice";
import saga from "./saga";

const Exams = () => {
  useInjectReducer({ key: EXAMS_SCOPE, reducer });
  useInjectSaga({ key: EXAMS_SCOPE, saga });
  const dispatch = useDispatch();
  const { examsData } = useSelector(getExamsData);

  console.log("test", examsData);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchExamsData());
  }, []);
  return <ContentContainer>exams</ContentContainer>;
};

export default Exams;
