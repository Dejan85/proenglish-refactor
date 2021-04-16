import React, { useEffect, useMemo } from "react";
import { useInjectSaga } from "~/src/utils/injectSaga";
import { useInjectReducer } from "~/src/utils/injectReducer";
import { getEventsState } from "./selectos";
import { useDispatch, useSelector } from "react-redux";
import { EVENTS_SCOPE } from "./constants";
import { reducer, fetchEventsData } from "./slice";
import saga from "./saga";
import { UiRender } from "./helpers";

// const Render: JSX.Element = <UiRender />;

const Events = (): JSX.Element => {
  useInjectReducer({ key: EVENTS_SCOPE, reducer });
  useInjectSaga({ key: EVENTS_SCOPE, saga });
  const dispatch = useDispatch();
  const { eventsData } = useSelector(getEventsState);

  const MemoizedUi = useMemo(() => <UiRender eventsData={eventsData} />, [
    eventsData,
  ]);

  useEffect(() => {
    dispatch(fetchEventsData());
  }, []);

  return MemoizedUi;
};

export default Events;
