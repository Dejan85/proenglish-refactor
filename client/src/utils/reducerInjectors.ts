import invariant from "invariant";
import { isEmpty, isFunction, isString } from "lodash";

import checkStore from "./checkStore";
import createReducer from "../redux/reducers";
import { RouterState } from "connected-react-router";
import { Reducer, CombinedState, AnyAction } from "redux";

export function injectReducerFactory(store: { injectedReducers: object | undefined; replaceReducer: (arg0: Reducer<CombinedState<{ router: RouterState<any>; }>, AnyAction>) => void; }, isValid: boolean) {
  return function injectReducer(key: PropertyKey, reducer: any) {
    if (!isValid) checkStore(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      "(app/utils...) injectReducer: Expected `reducer` to be a reducer function"
    );

    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store: { injectedReducers: object | undefined; replaceReducer: (arg0: Reducer<CombinedState<{ router: RouterState<any>; }>, AnyAction>) => void; }) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
