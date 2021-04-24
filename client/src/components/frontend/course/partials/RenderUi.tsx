import React, { useState, useMemo } from "react";
import {
  ContentContainer,
  Link,
  Heading,
  Text,
  Button,
  FontAwesomeIcon,
} from "~/src/components/ui";
import { heading, text, textInSpan } from "../messages";
import uniqid from "uniqid";
import { courseData } from "../messages";
import { useStringSplit } from "~/src/hooks/index";
const initCourse = ["a1", "a2", "b1", "b2", "c1", "c2"];

const counterHandlerDecrese = (
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setDiagram: React.Dispatch<React.SetStateAction<number>>,
  counter: number,
  diagram: number
) => {
  if (counter === 0) {
    setCounter(() => {
      return 5;
    });
    setDiagram(() => {
      return 100;
    });
  } else {
    setCounter(() => {
      return counter - 1;
    });
    setDiagram(() => {
      return diagram - 16.67;
    });
  }
};

const counterHandlerIncrese = (
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setDiagram: React.Dispatch<React.SetStateAction<number>>,
  counter: number,
  diagram: number
) => {
  if (counter === 5) {
    setCounter(() => {
      return 0;
    });
    setDiagram(() => {
      return 16.67;
    });
  } else {
    setCounter(() => {
      return counter + 1;
    });
    setDiagram(() => {
      return diagram + 16.67;
    });
  }
};

const RenderUi = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [diagram, setDiagram] = useState<number>(16.67);
  const { stringSplit } = useStringSplit();
  let diagramText: { firstWord: string; secondWord: string } = {
    firstWord: "",
    secondWord: "",
  };

  const contentUi = useMemo((): JSX.Element[] => {
    return courseData.map((item: any) => {
      return (
        item[initCourse[counter]] &&
        item[initCourse[counter]].map((item: any, index: number) => {
          if (index === 0) {
            diagramText = stringSplit(item[0]);
          }
          return (
            <Text as="p" className="course__text-paragraph" key={uniqid()}>
              {item[0]}
            </Text>
          );
        })
      );
    });
  }, [counter, stringSplit]);

  return (
    <ContentContainer className="course">
      <ContentContainer className="course__top-container">
        <ContentContainer className="course__right-content">
          <Link as="a" href="/" className="course__heading">
            {heading}
          </Link>

          <ContentContainer className="course__text-container">
            {text.map((text) => {
              return (
                <Text key={uniqid()} className="course__text" as="p">
                  {text}
                </Text>
              );
            })}
            <Text className="course__text course__text-span" as="span">
              {textInSpan}
            </Text>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer className="course__bottom-container">
        <ContentContainer className="course__left-content">
          <ContentContainer className="course__diagram-nav-container">
            <ContentContainer
              className="course__diagram-nav-icon-container"
              onClick={() =>
                counterHandlerDecrese(setCounter, setDiagram, counter, diagram)
              }
            >
              <FontAwesomeIcon className="fas fa-chevron-left course__diagram-nav-icon" />
            </ContentContainer>

            <ContentContainer
              onClick={() =>
                counterHandlerIncrese(setCounter, setDiagram, counter, diagram)
              }
              className="course__diagram-nav-icon-container"
            >
              <FontAwesomeIcon className="fas fa-chevron-right course__diagram-nav-icon" />
            </ContentContainer>
          </ContentContainer>
          <ContentContainer className="course__paragraph-container">
            {contentUi}
          </ContentContainer>
        </ContentContainer>
        <ContentContainer height={`${diagram}%`} className="course__diagram">
          <Text className="course__diagram-text" as="p">
            {diagramText.firstWord}
          </Text>
          <Text className="course__diagram-text" as="p">
            {diagramText.secondWord}
          </Text>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default RenderUi;
