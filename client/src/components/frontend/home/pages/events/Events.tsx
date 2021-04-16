import React, { useEffect } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { getEventsState } from "./selectos";
import { useDispatch, useSelector } from "react-redux";
import { EVENTS_SCOPE } from "./constants";
import { reducer, fetchEventsData } from "./slice";
import saga from "./saga";
import { UiRender } from "./helpers";

const MemoizedUi: JSX.Element = <UiRender />;

const Events = (): JSX.Element => {
  useInjectReducer({ key: EVENTS_SCOPE, reducer });
  useInjectSaga({ key: EVENTS_SCOPE, saga });
  const dispatch = useDispatch();
  const { eventsData } = useSelector(getEventsState);

  useEffect(() => {
    dispatch(fetchEventsData());
  }, []);

  console.log("test", eventsData);

  return MemoizedUi;
};

export default Events;
