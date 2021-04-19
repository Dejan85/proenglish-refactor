import React, { useEffect, useMemo } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { getEventsState } from "./selectos";
import { useDispatch, useSelector } from "react-redux";
import { EVENTS_SCOPE } from "./constants";
import { reducer, fetchEventsData, filterEventsAction } from "./slice";
import saga from "./saga";
import { UiRender } from "./helpers";
import { filterEventsForCurrentMonth } from "~/src/utils/timeAndDateHandlers";

const Events = (): JSX.Element => {
  useInjectReducer({ key: EVENTS_SCOPE, reducer });
  useInjectSaga({ key: EVENTS_SCOPE, saga });
  const dispatch = useDispatch();
  const { eventsData, filteredActiveEventsDates } = useSelector(getEventsState);

  const generateHighlhtDates = (value = new Date()): void => {
    const filteredEvents = filterEventsForCurrentMonth(eventsData, value);
    const fullYear: number = value.getFullYear();
    const month: number = value.getMonth();
    const highlightDates: Date[] = filteredEvents.map((item) => {
      const { date } = item;
      return new Date(Number(fullYear), month, Number(date.slice(0, 2)));
    });
    const filteredMontlyEvents = { filteredEvents, highlightDates };
    dispatch(filterEventsAction(filteredMontlyEvents));
  };

  const MemoizedUi = useMemo(() => {
    return (
      <UiRender
        eventsData={eventsData}
        generateHighlhtDates={generateHighlhtDates}
        filteredActiveEventsDates={filteredActiveEventsDates}
      />
    );
  }, [eventsData, filteredActiveEventsDates]);

  useEffect(() => {
    generateHighlhtDates();
  }, [eventsData]);

  useEffect(() => {
    dispatch(fetchEventsData());
    generateHighlhtDates();
  }, []);

  return MemoizedUi;
};

export default Events;
