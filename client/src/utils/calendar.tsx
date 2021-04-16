import React from "react";
import moment from "moment";

const months = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "jun",
  "jul",
  "avgust",
  "semptembar",
  "oktobar",
  "novembar",
  "decembar",
];

export const FormatTime = (props: { children: Date }): JSX.Element => {
  const { children } = props;
  const time = moment(children).format("DD. MMMM YYYY.");
  return <>{time}</>;
};

export const filterEventsForCurrentMonth = (events = [{ date: "" }]) => {
  const getCurrentMonth = moment().month();
  const currentMonth = months[getCurrentMonth];

  // const events = [
  //   {
  //     created: "2019-08-29T02:19:08.186Z",
  //     date: "30 avgust 2019",
  //     description: "Pocinjemo pripreme za ispite IELST.",
  //     time: "15:00 - 19:00",
  //     title: "Priprema za ispite IELST",
  //   },
  //   {
  //     created: "2021-01-09T18:03:00.079Z",
  //     date: "27 april 2021",
  //     description: "Computer based ↵Prijava: od 5. decembra↵Beograd",
  //     time: "9:00",
  //     title: "CPE (Cambridge English Proficiency)",
  //   },
  //   {
  //     created: "2021-01-29T10:04:57.653Z",
  //     date: "11 februar 2021",
  //     description: "Speaking address↵Bulevar vojvode Bojovica 6-8",
  //     time: "February 11, 2021, 09:00 - 09:20",
  //     title: "IELTS Speaking Face to face ",
  //   },
  // ];

  const test = events.filter((event) => {
    const { date } = event;

    if (date.search(currentMonth) !== -1) {
      return event;
    }
  });

  console.log("test", test);
};
