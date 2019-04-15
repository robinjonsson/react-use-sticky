import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref, and a stateful value bound to the ref
 * @returns [Any, Boolean]
 */
export function useSticky() {
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const eventsToBind = [
    [document, "scroll"],
    [window, "resize"],
    [window, "orientationchange"]
  ];

  useEffect(() => {
    observe();

    // Bind events
    eventsToBind.forEach(eventPair => {
      eventPair[0].addEventListener(eventPair[1], observe);
    });

    // Observe when element enters or leaves sticky state
    function observe() {
      const elementOffset = stickyRef.current.getBoundingClientRect().top;
      const stickyOffset = parseInt(getComputedStyle(stickyRef.current).top);
      const stickyActive = elementOffset === stickyOffset;

      if (stickyActive && !isSticky) setIsSticky(true);
      else if (!stickyActive && isSticky) setIsSticky(false);
    }

    return () => {
      eventsToBind.forEach(eventPair => {
        eventPair[0].removeEventListener(eventPair[1], observe);
      });
    };
  }, [stickyRef, isSticky]);

  return [stickyRef, isSticky];
}
