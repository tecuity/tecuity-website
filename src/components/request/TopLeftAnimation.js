import React, { useRef, useEffect } from "react";
import { TweenMax, Power1 } from 'gsap/TweenMax'

export default () => {
  const square1 = useRef()
  const square2 = useRef()

  const animate = () => {
    TweenMax.to(square1.current, 3.2, {y: 7, ease: Power1.easeInOut}).yoyo(true).repeat(-1)
    TweenMax.to(square2.current, 3.9, {y: -12, ease: Power1.easeInOut}).yoyo(true).repeat(-1)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <svg viewBox="0 -20 238.81 138.59">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            ref={square2}
            d="M33.63 56.76L134.27 6.45a19.93 19.93 0 0 1 17.84 0l83.61 42a3.77 3.77 0 0 1 0 6.75L135 105.49a19.93 19.93 0 0 1-17.84 0l-83.54-42a3.77 3.77 0 0 1 .01-6.73z"
            fill="#fff"
            stroke="#95c93d"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            ref={square1}
            d="M.74 20.9l35.54 17.77a7.05 7.05 0 0 0 6.3 0l35.57-17.78a1.33 1.33 0 0 0 0-2.38L42.58.74a7.05 7.05 0 0 0-6.3 0L.74 18.52a1.32 1.32 0 0 0 0 2.38z"
            fill="#95c93d"
          />
        </g>
      </g>
    </svg>
  );
};
