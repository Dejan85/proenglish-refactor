import React, { useState } from "react";

const useScrollIndicator = () => {
  const [scroll, setScroll] = useState();
  const scrollIndicator = () => {
    window.onscroll = () => {
      let scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (scroll / height) * 100;

      setScroll((): any => {
        return scrolled;
      });
    };

    return (
      <div className="scroll__indicator" style={{ width: scroll + "%" }} />
    );
  };

  return {
    scrollIndicator,
    scroll,
  };
};

export default useScrollIndicator;
