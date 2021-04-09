import React from "react";
import { WrapperType } from "~/src/global-types";
import Box from "./Box";
import { iconsClassName, boxesText } from "./constants";
import uniqid from "uniqid";

const generateBoxes = () =>
  iconsClassName.map((icon: string, i: number) => (
    <Box key={uniqid()} iconClassName={icon} text={boxesText[i]} />
  ));

function HomeIconsBoxes(): JSX.Element {
  const Wrapper: WrapperType = "div";
  return <Wrapper>{generateBoxes()}</Wrapper>;
}

export default HomeIconsBoxes;
