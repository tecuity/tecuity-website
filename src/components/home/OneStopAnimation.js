import React, { useEffect, useRef } from "react";
import { withTheme } from 'emotion-theming'
import { TimelineMax, Linear } from 'gsap/TweenMax'
import 'gsap/TextPlugin'

const OneStopAnimation = ({theme: {primary: {color}}}) => {
  const inputRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()

  const animate = () => {
    const timeline = new TimelineMax()
    timeline.to(inputRef.current, 1, {text: '', ease:Linear.easeNone}, 1)
    timeline.to(leftRef.current, 1, {text: '', ease:Linear.easeNone}, 1)
    timeline.to(rightRef.current, 1, {text: '', ease:Linear.easeNone}, 1)
    timeline.to(inputRef.current, 1, {text: 'Tony Stark', ease:Linear.easeNone}, 2)
    timeline.to(leftRef.current, 1, {text: 'Tony Stark', ease:Linear.easeNone}, 2)
    timeline.to(rightRef.current, 1, {text: 'Tony Stark', ease:Linear.easeNone}, 2)
    timeline.to(inputRef.current, 1, {text: 'Tony ', ease:Linear.easeNone}, 4)
    timeline.to(leftRef.current, 1, {text: 'Tony ', ease:Linear.easeNone}, 4)
    timeline.to(rightRef.current, 1, {text: 'Tony ', ease:Linear.easeNone}, 4)
    timeline.to(inputRef.current, 1, {text: 'Tony Hawk', ease:Linear.easeNone}, 5)
    timeline.to(leftRef.current, 1, {text: 'Tony Hawk', ease:Linear.easeNone}, 5)
    timeline.to(rightRef.current, 1, {text: 'Tony Hawk', ease:Linear.easeNone}, 5)
    timeline.to(inputRef.current, 1, {text: '', ease:Linear.easeNone}, 7)
    timeline.to(leftRef.current, 1, {text: '', ease:Linear.easeNone}, 7)
    timeline.to(rightRef.current, 1, {text: '', ease:Linear.easeNone}, 7)
    timeline.to(inputRef.current, 1, {text: 'Felicia Alexander', ease:Linear.easeNone}, 8)
    timeline.to(leftRef.current, 1, {text: 'Felicia Alexander', ease:Linear.easeNone}, 8)
    timeline.to(rightRef.current, 1, {text: 'Felicia Alexander', ease:Linear.easeNone}, 8)
    timeline.to(inputRef.current, 1, {text: '', ease:Linear.easeNone}, 10)
    timeline.to(leftRef.current, 1, {text: '', ease:Linear.easeNone}, 10)
    timeline.to(rightRef.current, 1, {text: '', ease:Linear.easeNone}, 10)
    timeline.to(inputRef.current, 1, {text: 'William Price', ease:Linear.easeNone}, 11)
    timeline.to(leftRef.current, 1, {text: 'William Price', ease:Linear.easeNone}, 11)
    timeline.to(rightRef.current, 1, {text: 'William Price', ease:Linear.easeNone}, 11)
    timeline.to(inputRef.current, 1, {text: '', ease:Linear.easeNone}, 13)
    timeline.to(leftRef.current, 1, {text: '', ease:Linear.easeNone}, 13)
    timeline.to(rightRef.current, 1, {text: '', ease:Linear.easeNone}, 13)
    timeline.to(inputRef.current, 1, {text: 'Ivan Carvallo', ease:Linear.easeNone}, 14)
    timeline.to(leftRef.current, 1, {text: 'Ivan Carvallo', ease:Linear.easeNone}, 14)
    timeline.to(rightRef.current, 1, {text: 'Ivan Carvallo', ease:Linear.easeNone}, 14)
    timeline.repeat(-1).repeatDelay(1)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <svg viewBox="0 0 274.44 227.22">
    <title>{'pub-sub-animation'}</title>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <rect
          x={1}
          y={24.16}
          width={272.44}
          height={41.29}
          rx={7.04}
          fill="#fff"
          stroke={color}
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          d="M1 202.33v-75.65a7 7 0 0 1 7-7h101.92a7 7 0 0 1 7 7v75.65M157.48 202.33v-75.65a7 7 0 0 1 7-7h101.93a7 7 0 0 1 7 7v75.65"
          fill="none"
          stroke={color}
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <text
          transform="translate(1 17.01)"
          fontSize={20.268}
          fill="#3d4543"
          fontFamily="Hind-Regular,Hind"
        >
          {'Full Name'}
        </text>
        <text
          transform="translate(19.39 221.51)"
          fontSize={13}
          fill="#3d4543"
          fontFamily="Hind-Regular,Hind"
        >
          {'Dept. of Labor'}
        </text>
        <text
          transform="translate(167.6 221.51)"
          fontSize={13}
          fill="#3d4543"
          fontFamily="Hind-Regular,Hind"
        >
          {'Dept. of Revenue'}
        </text>
        <text
          transform="translate(13.31 51.06)"
          fontSize={20.092}
          fill="#3d4543"
          fontFamily="Hind-Regular,Hind"
          ref={inputRef}
        >
          {'Ivan Carvallo'}
        </text>
        <text
          transform="translate(60 183.91)"
          fontSize={14}
          fill="#3d4543"
          fontFamily="Hind-Regular,Hind"
          textAnchor="middle"
          ref={leftRef}
        >
          {'Ivan Carvallo'}
        </text>
        {/* <path
          fill="none"
          stroke="#3d4543"
          strokeMiterlimit={10}
          d="M127.75 31.74v25.77"
        /> */}
        <rect
          x={13.23}
          y={135.16}
          width={31.92}
          height={31.92}
          rx={1.5}
          fill={color}
          opacity={0.6}
        />
        <rect
          x={52.47}
          y={135.16}
          width={52.07}
          height={12.8}
          rx={1.5}
          fill={color}
          opacity={0.6}
        />
        <rect
          x={52.47}
          y={154.28}
          width={52.07}
          height={12.8}
          rx={1.5}
          fill={color}
          opacity={0.6}
        />
        <text
          transform="translate(215.5 144.72)"
          fontSize={14}
          fill="#3d4543"
          fontFamily="Hind-Regular,Hind"
          textAnchor="middle"
          ref={rightRef}
        >
          {'Ivan Carvallo'}
        </text>
        <rect
          x={170.1}
          y={153.34}
          width={31.92}
          height={31.92}
          rx={1.5}
          fill={color}
          opacity={0.6}
        />
        <rect
          x={209.34}
          y={153.34}
          width={52.07}
          height={12.8}
          rx={1.5}
          fill={color}
          opacity={0.6}
        />
        <rect
          x={209.34}
          y={172.46}
          width={52.07}
          height={12.8}
          rx={1.5}
          fill={color}
          opacity={0.6}
        />
        <path
          d="M60.2 119.64h0A18.62 18.62 0 0 1 78.82 101h29.78a18.62 18.62 0 0 0 18.62-18.6V65.46M215.46 119.64h0A18.62 18.62 0 0 0 196.84 101h-29.77a18.63 18.63 0 0 1-18.63-18.6V65.46"
          fill="none"
          stroke={color}
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
    </g>
  </svg>
  );
};

export default withTheme(OneStopAnimation)
