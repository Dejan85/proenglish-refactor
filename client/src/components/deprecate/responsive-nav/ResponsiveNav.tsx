import React, { useState } from "react";

// components
import ResponsiveDropNav from "./ResponsiveDropNav";

// hooks

const ResponsiveNav = () => {
  const [nav, setNav] = useState(false);

  const dropNavHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="responsive-nav">
      <i className="fas fa-bars" onClick={dropNavHandler} />
      {nav && <ResponsiveDropNav handler={dropNavHandler} />}
    </div>
  );
};

export default ResponsiveNav;
