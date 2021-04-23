import React, { useEffect } from "react";
import "./styles.scss";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "./selectors";
import { ABOUT_SCOPE } from "./constants";
import { fetchAboutDataAction, reducer } from "./slice";
import saga from "./saga";
import RenderUi from "./partials/UiRender";

const About = () => {
  useInjectReducer({ key: ABOUT_SCOPE, reducer });
  useInjectSaga({ key: ABOUT_SCOPE, saga });
  const dispatch = useDispatch();
  const { aboutData } = useSelector(getAboutData);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchAboutDataAction());
  }, []);

  return <RenderUi aboutData={aboutData} />;
};

export default About;
