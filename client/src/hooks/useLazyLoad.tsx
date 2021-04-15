import React, { useState, useRef, useEffect } from "react";

const defaultOptions = {
  lazy: false,
  onceUntilVisible: true,
  root: null,
  threshold: 0,
  rootMargin: "250px",
};

const useLazyLoad = (props: any) => {
  const { options = defaultOptions } = props;
  const ref: any = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lazyOptions = { ...defaultOptions, ...options };

    // handle observation
    const handleObservation = (
      entires: Array<any>,
      instance: IntersectionObserver
    ): void => {
      entires.forEach((entry: IntersectionObserverEntry): void => {
        if (entry.isIntersecting && lazyOptions.onceUntilVisible) {
          instance.unobserve(entry.target);
          instance.disconnect();
        }

        // set intersection state on change
        setVisible(entry.isIntersecting);
      });
    };

    // create intersection observer with merged default options and input options
    const observer = new IntersectionObserver(handleObservation, options);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return [ref, visible];
};

export default useLazyLoad;
