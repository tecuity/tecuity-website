import React, { useRef, useEffect } from "react";
import { TweenMax, Power1 } from 'gsap/TweenMax'

export default () => {
  const square1 = useRef()
  const square2 = useRef()

  const animate = () => {
    TweenMax.to(square1.current, 2.7, {y: 11, ease: Power1.easeInOut}).yoyo(true).repeat(-1)
    TweenMax.to(square2.current, 3.8, {y: -12, ease: Power1.easeInOut}).yoyo(true).repeat(-1)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <svg viewBox="0 0 311.07 167.39">
      <title>{"panels-2"}</title>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            ref={square1}
            d="M11.73 70.87l156.6 78.31a31.07 31.07 0 0 0 27.78 0l110.71-56.12a5.88 5.88 0 0 0 0-10.51L150.09 4.27a31.06 31.06 0 0 0-27.76 0l-110.6 56.1a5.87 5.87 0 0 0 0 10.5z"
            fill="#fff"
            stroke="#95c93d"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <path
            ref={square2}
            d="M2.42 127.42l76 37.53a23.19 23.19 0 0 0 20.7 0l116.78-58.39a4.37 4.37 0 0 0 0-7.83l-76.06-37.51a23.17 23.17 0 0 0-20.69 0L2.42 119.59a4.37 4.37 0 0 0 0 7.83z"
            fill="#95c93d"
          />
        </g>
      </g>
    </svg>
  );
};
