import { fromPairs } from "lodash";
import React, { lazy, Suspense } from "react";
import { Loading } from "~/src/components/ui";

const loadable = (
  importFunc: any,
  { fallback = <Loading height="100vh" /> } = {
    fallback: <Loading height="100vh" />,
  }
) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
