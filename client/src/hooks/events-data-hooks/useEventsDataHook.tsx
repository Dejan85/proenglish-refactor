import { useEffect } from "react";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useDispatch, useSelector } from "react-redux";
import { getEventsState } from "./selectos";
import { EVENTS_SCOPE } from "./constants";
import {
  reducer,
  fetchEventsData,
  filterEventsAction,
  filterDailyEventsAction,
} from "./slice";
import saga from "./saga";
import {
  filterEventsForCurrentMonth,
  filterEventsForCurrentDay,
} from "~/src/utils/timeAndDateHandlers";

const useEventsDataHook = () => {
  useInjectReducer({ key: EVENTS_SCOPE, reducer });
  useInjectSaga({ key: EVENTS_SCOPE, saga });
  const dispatch = useDispatch();
  const {
    eventsData,
    filteredActiveEventsDates,
    filteredDailyEventsData,
  } = useSelector(getEventsState);

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

  const generateDailyEvents = (date?: Date | undefined) => {
    const { filteredEvents } = filteredActiveEventsDates;
    const dailyEvents = filterEventsForCurrentDay(date, filteredEvents);
    dispatch(filterDailyEventsAction(dailyEvents));
  };

  useEffect(() => {
    generateDailyEvents();
  }, [filteredActiveEventsDates]);

  useEffect(() => {
    generateHighlhtDates();
  }, [eventsData]);

  useEffect(() => {
    dispatch(fetchEventsData());
    generateHighlhtDates();
  }, []);

  return {
    eventsData,
    filteredActiveEventsDates,
    filteredDailyEventsData,
    generateHighlhtDates,
    generateDailyEvents,
  };
};

export default useEventsDataHook;
