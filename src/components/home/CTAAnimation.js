import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { TweenMax, Linear } from 'gsap/TweenMax'
import features from "./features";

export default () => {
  return (
    <SVGWrapper viewBox="0 0 149.09 112">
      <svg viewBox="0 0 659.27 535.7">
        <g data-name="Layer 2">
          {features.map((f, i) => (
            <Text index={i} key={f}>{f}</Text>
          ))}
          <g data-name="Layer 1">
            <path
              d="M337.07 301.23l-3.18-3.17A26.47 26.47 0 0 0 349 255a5 5 0 0 0-.33-.47c-.38-.42-.77-.84-1.18-1.24l-18.68-18.65a6 6 0 0 1-.33-8.25 5.93 5.93 0 0 1 8.57-.21L383 272a5.74 5.74 0 0 0 2 1.3 56.56 56.56 0 0 0-2.77-18.75L346.65 219a57.9 57.9 0 0 0-24.58-2.67 16.28 16.28 0 0 0-2 1.68 17.86 17.86 0 0 0 .45 25l3 3a26.47 26.47 0 0 0-15.13 43.09c.12.15.2.31.33.46.38.43.77.84 1.18 1.25l18.81 18.77a5.9 5.9 0 0 1-.22 8.55 6.05 6.05 0 0 1-8.27-.33L274.37 272a5.88 5.88 0 0 0-2-1.31 56.51 56.51 0 0 0 2.76 18.75L310.76 325a58.09 58.09 0 0 0 24.55 2.67 13.34 13.34 0 0 0 1.51-1.21 17.69 17.69 0 0 0 .25-25.23zm-18.9-18.88a14.73 14.73 0 0 1 .34-21 15 15 0 0 1 20.73.35 14.73 14.73 0 0 1-.34 21 15 15 0 0 1-20.73-.35z"
              fill="#fff"
            />
            <path
              d="M382.33 254.63a56 56 0 0 0-13.72-22.42 56.24 56.24 0 0 0-22.47-13.7l.51.52 35.63 35.55zM339.24 261.7a15 15 0 0 0-20.73-.35 14.73 14.73 0 0 0-.34 21 15 15 0 0 0 20.73.35 14.73 14.73 0 0 0 .34-21z"
              fill="#f5771d"
            />
            <path
              d="M320.22 317.79a6.05 6.05 0 0 0 8.27.33 5.9 5.9 0 0 0 .22-8.55L309.9 290.8c-.41-.41-.8-.82-1.18-1.25-.13-.15-.21-.31-.33-.46A26.49 26.49 0 0 1 323.52 246l-3-3a17.86 17.86 0 0 1-.45-25 16.28 16.28 0 0 1 2-1.68c.12-.08.23-.17.34-.26a56.2 56.2 0 0 0-33.6 16.11c-.38.38-.74.77-1.1 1.15a56 56 0 0 0-15.37 37.35 5.88 5.88 0 0 1 2 1.31zM275.08 289.42a56 56 0 0 0 36.2 36.12l-.52-.51-35.63-35.56zM369.76 310.64c.63-.67 1.25-1.36 1.84-2.05l.08-.09c.61-.71 1.19-1.43 1.75-2.16l.05-.06c.57-.74 1.12-1.5 1.65-2.27a56.11 56.11 0 0 0 9.92-30.65 5.74 5.74 0 0 1-2-1.3l-46-45.88a5.93 5.93 0 0 0-8.57.21 6 6 0 0 0 .33 8.25l18.68 18.65c.41.4.8.82 1.18 1.24a5 5 0 0 1 .33.47 26.49 26.49 0 0 1-15.13 43.09l3.18 3.17a17.69 17.69 0 0 1-.25 25.26 13.34 13.34 0 0 1-1.51 1.21c-.13.08-.25.17-.37.26a56.27 56.27 0 0 0 33.67-16.11c.35-.36.69-.73 1-1.09z"
              fill="#f5771d"
            />
            <path fill="none" d="M0 0h659.27v535.7H0z" />
          </g>
        </g>
      </svg>
    </SVGWrapper>
  );
};

const SVGWrapper = styled("svg")({
  width: "100%",
  maxWidth: 900
});

const getRandomPoint = radius => {
  var angle = Math.random() * Math.PI * 2;
  return {
    x: (Math.cos(angle) * radius) + 300,
    y: (Math.sin(angle) * radius) + 300
  };
};

const Text = ({ children, index }) => {
  const node = useRef();

  const animate = () => {
    const {x, y} = getRandomPoint(190)
    TweenMax.to(node.current, 4, {x,y,opacity:0,scale:1,ease:Linear.easeNone,delay: index * .4}).repeat(-1)
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <text
      ref={node}
      transform="translate(285.09 276.19),scale(.3)"
      fontSize={26}
      fill="#888"
      fontFamily="Hind-Medium,Hind Medium"
      fontWeight={500}
      opacity={1}
    >
      {children}
    </text>
  );
};
