import React from "react";
import moment from "moment";

export const FormatTime = (props: { children: Date }): JSX.Element => {
  const { children } = props;
  const time = moment(children).format("DD. MMMM YYYY.");
  return <>{time}</>;
};
