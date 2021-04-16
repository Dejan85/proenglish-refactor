import React from "react";
import { UiRender } from "./helpers";

const MemoizedUi: JSX.Element = <UiRender />;

const Events = (): JSX.Element => {
  return MemoizedUi;
};

export default Events;
