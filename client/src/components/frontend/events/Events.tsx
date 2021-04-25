import React, { useEffect } from "react";
import RenderUi from "./partials/RenderUi";

const Events = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RenderUi />;
};

export default Events;
