import React, { useEffect } from "react";
import { ContentContainer, SubContainer } from "~/src/components/ui";
import "./styles.scss";
import background from "./images/background.jpg";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "./selectors";
import { ABOUT_SCOPE } from "./constants";
import { fetchAboutDataAction, reducer } from "./slice";
import saga from "./saga";

const About = () => {
  useInjectReducer({ key: ABOUT_SCOPE, reducer });
  useInjectSaga({ key: ABOUT_SCOPE, saga });
  const dispatch = useDispatch();
  const { aboutData } = useSelector(getAboutData);

  useEffect(() => {
    dispatch(fetchAboutDataAction());
  }, []);

  console.log("test", aboutData);

  return (
    <ContentContainer className="about">
      <ContentContainer
        className="about__background"
        backgroundImage={background}
      />
      <SubContainer>x</SubContainer>
    </ContentContainer>
  );
};

export default About;
