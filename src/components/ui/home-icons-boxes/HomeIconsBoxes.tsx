import React from "react";
import { WrapperType } from "~/src/global-types";
import Box from "./Box";
import { iconsClassName, boxesText } from "./constants";
import uniqid from "uniqid";

const generateBoxes = (): JSX.Element[] =>
  iconsClassName.map((icon: string, i: number) => (
    <Box key={uniqid()} iconClassName={icon} text={boxesText[i]} />
  ));

const boxes = generateBoxes();

function HomeIconsBoxes(): JSX.Element {
  const Wrapper: WrapperType = "div";
  return <Wrapper className="home-icon-boxes">{boxes}</Wrapper>;
}

export default HomeIconsBoxes;
