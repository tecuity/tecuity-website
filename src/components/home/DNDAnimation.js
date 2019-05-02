import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { TimelineMax, Elastic, Power2, Power0 } from 'gsap/TweenMax'

export default () => {
  const pointer = useRef()
  const nameInputs = useRef()
  const phoneInput = useRef()
  const phoneSolid = useRef()
  const phoneGhost = useRef()

  const animate = () => {
    const timeline = new TimelineMax()
    timeline.to(pointer.current, .8, {x: '-425%', y: '-30%', ease: Power2.easeInOut})
    timeline.to(pointer.current, 1, {x: '640%', y: '130%', ease: Power2.easeInOut})
    timeline.to(phoneSolid.current, 1, { x: '570%', y: '130%', ease: Power2.easeInOut}, '-=1')
    timeline.to(phoneSolid.current, .5, { rotation: 15 }, '-=1')
    timeline.to(phoneSolid.current, .3, { opacity: 0, scale: .7}, '-=.1')
    timeline.to(phoneGhost.current, .3, { opacity: 1}, '-=.4')
    timeline.fromTo(phoneInput.current, .3, {opacity: 0, scale: .8}, { opacity: 1, scale: 1 })
    timeline.to(nameInputs.current, 1, { y: -30, ease: Elastic.easeOut.config(1, 0.5) }, '-=.2')
    timeline.to(pointer.current, .3, {x: '-20', ease: Power2.easeInOut}, 3)
    timeline.to(phoneInput.current, .3, {x: '-20', ease: Power2.easeInOut}, 3)
    timeline.to(pointer.current, .6, {x: '150', ease: Power2.easeIn}, 3.3)
    timeline.to(phoneInput.current, .6, {x: '150', ease: Power2.easeIn}, 3.3)
    timeline.to(phoneInput.current, .3, {opacity: 0, ease: Power2.easeIn}, 3.6)
    timeline.to(pointer.current, 1, {x: -350, y: -85, ease: Power2.easeInOut}, 3.9)
    timeline.to(nameInputs.current, 1, { y: 0, ease: Elastic.easeOut.config(1, 0.5) }, 3.9)
    timeline.timeScale(1.3).repeat(-1).repeatDelay(.5)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <SVGWrapper viewBox="0 -30 947.7 250.76">
      <defs>
        <style>
          {
            ".prefix__cls-1{fill:none}.prefix__cls-1,.prefix__cls-4{stroke:#95c93d;stroke-miterlimit:10;stroke-width:2px}.prefix__cls-2{fill:#3d4543}.prefix__cls-4{fill:#fff}"
          }
        </style>
      </defs>
      <title>{"Animation depicting dragging and dropping inputs"}</title>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <g id="prefix__textField">
            <rect
              className="prefix__cls-1"
              x={1}
              y={1}
              width={106.42}
              height={72.83}
              rx={12.03}
            />
            <path
              className="prefix__cls-2"
              d="M25.28 28.6H60.1v-3.29h-37a1.15 1.15 0 0 0-1.1 1.15v21.32a1.16 1.16 0 0 0 1.15 1.16h37v-3.3H25.28zM85.28 25.31h-13.6v3.29h11.46v17H71.68v3.3h13.6a1.16 1.16 0 0 0 1.16-1.16V26.46a1.15 1.15 0 0 0-1.16-1.15z"
            />
            <path
              className="prefix__cls-2"
              d="M72.07 52.41h-3.89a.65.65 0 0 1-.64-.65V22.48a.64.64 0 0 1 .64-.64h3.89a1.16 1.16 0 0 0 1.16-1.15v-1a1.16 1.16 0 0 0-1.16-1.15h-3.89a3.91 3.91 0 0 0-2 .57l-.26.15-.26-.15a4 4 0 0 0-2-.57h-3.95a1.16 1.16 0 0 0-1.16 1.15v1a1.16 1.16 0 0 0 1.16 1.15h3.88a.65.65 0 0 1 .65.64v29.28a.65.65 0 0 1-.65.65h-3.88a1.15 1.15 0 0 0-1.16 1.15v1a1.15 1.15 0 0 0 1.16 1.15h3.88a3.94 3.94 0 0 0 2-.56l.26-.16.26.16a3.9 3.9 0 0 0 2 .56H72a1.15 1.15 0 0 0 1.16-1.15v-1a1.15 1.15 0 0 0-1.09-1.15z"
            />
          </g>
          <g id="prefix__checkbox">
            <rect
              className="prefix__cls-1"
              x={1}
              y={88.94}
              width={106.42}
              height={72.83}
              rx={12.03}
            />
            <path
              className="prefix__cls-2"
              d="M69.74 143.4a.5.5 0 0 1-.5.5H37.32a.5.5 0 0 1-.5-.5v-31.91a.5.5 0 0 1 .5-.5h29.22l3.63-3.63a4.08 4.08 0 0 0-.93-.11H37.32a4.24 4.24 0 0 0-4.24 4.24v31.91a4.24 4.24 0 0 0 4.24 4.24h31.92a4.24 4.24 0 0 0 4.24-4.24v-23.49l-3.74 3.74z"
            />
            <path
              className="prefix__cls-2"
              d="M81.81 106.29a1.86 1.86 0 0 0 0-2.64 1.86 1.86 0 0 0-2.64 0l-25.71 25.71-8-8a1.87 1.87 0 1 0-2.64 2.64l10.59 10.59z"
            />
          </g>
          <g id="prefix__radio">
            <rect
              className="prefix__cls-1"
              x={124.49}
              y={88.94}
              width={106.42}
              height={72.83}
              rx={12.03}
            />
            <path
              className="prefix__cls-2"
              d="M159.34 101a10.28 10.28 0 1 0 10.28 10.28A10.28 10.28 0 0 0 159.34 101zm0 17.53a7.25 7.25 0 1 1 7.24-7.25 7.26 7.26 0 0 1-7.24 7.29zM159.34 129.1a10.28 10.28 0 1 0 10.28 10.28 10.28 10.28 0 0 0-10.28-10.28zm0 17.53a7.25 7.25 0 1 1 7.24-7.25 7.26 7.26 0 0 1-7.24 7.25z"
            />
            <path
              className="prefix__cls-2"
              d="M159.34 135.59a3.79 3.79 0 1 0 3.79 3.79 3.79 3.79 0 0 0-3.79-3.79zM178.66 112.84h28.9a1.52 1.52 0 0 0 0-3h-28.9a1.52 1.52 0 1 0 0 3zM207.56 137.86h-28.9a1.52 1.52 0 1 0 0 3h28.9a1.52 1.52 0 0 0 0-3z"
            />
          </g>
          <g id="prefix__phoneInput" opacity={0} ref={phoneInput}>
            <rect
              className="prefix__cls-4"
              x={620.44}
              y={114.92}
              width={223.77}
              height={41.29}
              rx={7.04}
            />
            <path d="M622 94.11h3.59a5.39 5.39 0 0 1 3.74 1.23 4.07 4.07 0 0 1 1.37 3.17 3.89 3.89 0 0 1-1.36 3 5.23 5.23 0 0 1-3.59 1.21h-2.11v5H622zm1.64 7.24h2.11a3.44 3.44 0 0 0 2.41-.8 2.67 2.67 0 0 0 .87-2 2.79 2.79 0 0 0-.89-2.19 3.63 3.63 0 0 0-2.53-.81h-2zM634.55 93.44v5.84a3.28 3.28 0 0 1 3.24-1.92 3.18 3.18 0 0 1 2.38.91 3.36 3.36 0 0 1 .9 2.47v7h-1.6v-6.64a2.4 2.4 0 0 0-.58-1.73 2 2 0 0 0-1.51-.61 2.71 2.71 0 0 0-2 .88 3.4 3.4 0 0 0-.85 2.49v5.61H633v-14.3zM648.09 108a4.39 4.39 0 0 1-3.5-1.49 6.14 6.14 0 0 1 0-7.58 4.36 4.36 0 0 1 3.46-1.53 4.43 4.43 0 0 1 3.59 1.5 5.67 5.67 0 0 1 1.27 3.81 5.57 5.57 0 0 1-1.3 3.79 4.45 4.45 0 0 1-3.52 1.5zm0-9.19a2.66 2.66 0 0 0-2.29 1.14 4.54 4.54 0 0 0-.84 2.78 4.37 4.37 0 0 0 .86 2.72 2.69 2.69 0 0 0 2.27 1.13 2.8 2.8 0 0 0 2.37-1.11 4.44 4.44 0 0 0 .83-2.74 4.76 4.76 0 0 0-.79-2.81 2.76 2.76 0 0 0-2.41-1.15zM656.88 97.5v1.78a3.29 3.29 0 0 1 3.25-1.92 3.2 3.2 0 0 1 2.39.91 3.35 3.35 0 0 1 .89 2.43v7.07h-1.6v-6.64a2.43 2.43 0 0 0-.58-1.74 2 2 0 0 0-1.51-.6 2.65 2.65 0 0 0-2 .9 3.46 3.46 0 0 0-.84 2.47v5.61h-1.58V97.5zM673.74 105.75v1.5a6.17 6.17 0 0 1-2.91.63 4.91 4.91 0 0 1-5.19-5.21 5.6 5.6 0 0 1 1.27-3.88 4.25 4.25 0 0 1 3.29-1.41 4 4 0 0 1 3.06 1.23 5.05 5.05 0 0 1 1.13 3.51 6.29 6.29 0 0 1-.1 1.19h-7a3.46 3.46 0 0 0 1.15 2.34 3.87 3.87 0 0 0 2.56.81 4.79 4.79 0 0 0 2.74-.71zm-1-3.77v-.41a2.93 2.93 0 0 0-.69-2 2.45 2.45 0 0 0-1.9-.76 2.64 2.64 0 0 0-2 .84 3.73 3.73 0 0 0-1 2.37zM681.85 107.77V94.11h2.07l3.42 5.76 3.47 5.92c0-1.31-.08-3.28-.08-5.9v-5.78h1.64v13.66h-2.07l-3.42-5.71c-.69-1.15-1.33-2.22-1.91-3.21s-1-1.71-1.23-2.14l-.35-.63q.11 2.1.1 5.94v5.75zM701.79 97.5h1.6v10.27h-1.6V106a3.15 3.15 0 0 1-3.22 1.91 3.22 3.22 0 0 1-2.4-.91 3.3 3.3 0 0 1-.88-2.42V97.5h1.6v6.67a2.34 2.34 0 0 0 .57 1.7 2 2 0 0 0 1.54.59 2.51 2.51 0 0 0 2-.9 3.55 3.55 0 0 0 .76-2.41zM707.93 97.5v1.66a3 3 0 0 1 2.9-1.8 2.79 2.79 0 0 1 3 2 3.48 3.48 0 0 1 1.25-1.49 3.25 3.25 0 0 1 1.79-.51 3 3 0 0 1 2.41.91 3.55 3.55 0 0 1 .81 2.45v7h-1.6v-6.64c0-1.56-.65-2.34-2-2.34a2.27 2.27 0 0 0-1.74.89 3.6 3.6 0 0 0-.78 2.48v5.61h-1.6v-6.64c0-1.56-.65-2.34-2-2.34a2.27 2.27 0 0 0-1.74.89 3.6 3.6 0 0 0-.78 2.48v5.61h-1.58V97.5zM724.59 93.44V99a3.54 3.54 0 0 1 3.13-1.7 3.94 3.94 0 0 1 3.18 1.49 6.62 6.62 0 0 1 .07 7.59 3.84 3.84 0 0 1-3.21 1.52 3.55 3.55 0 0 1-3.17-1.69v1.52H723V93.44zm3 13a2.5 2.5 0 0 0 2-1 4.23 4.23 0 0 0 .81-2.69 4.51 4.51 0 0 0-.84-2.93 2.65 2.65 0 0 0-2.12-1 2.76 2.76 0 0 0-2 .92 3.87 3.87 0 0 0-.92 2.85 4.21 4.21 0 0 0 .89 3 2.79 2.79 0 0 0 2.2.89zM742 105.75v1.5a6.17 6.17 0 0 1-2.91.63 4.91 4.91 0 0 1-5.19-5.21 5.6 5.6 0 0 1 1.27-3.88 4.25 4.25 0 0 1 3.29-1.41 4 4 0 0 1 3.06 1.23 5 5 0 0 1 1.13 3.51 6.29 6.29 0 0 1-.1 1.19h-7a3.46 3.46 0 0 0 1.15 2.34 3.87 3.87 0 0 0 2.56.81 4.77 4.77 0 0 0 2.74-.71zm-1-3.75v-.41a2.93 2.93 0 0 0-.69-2 2.45 2.45 0 0 0-1.9-.76 2.64 2.64 0 0 0-2 .84 3.73 3.73 0 0 0-1 2.37zM746.65 97.5v1.8a2.83 2.83 0 0 1 2.79-1.9 2.78 2.78 0 0 1 .57 0V99a2.56 2.56 0 0 0-.87-.14 2.14 2.14 0 0 0-1.79 1 3.84 3.84 0 0 0-.7 2.29v5.61H745V97.49z" />
          </g>
          <g id="prefix__nameInputs" ref={nameInputs}>
            <rect
              className="prefix__cls-4"
              x={620.44}
              y={60.76}
              width={156.56}
              height={41.29}
              rx={7.04}
            />
            <path d="M629.5 41.38h-5.86v4.85h5.15v1.44h-5.15v5.93H622V39.94h7.5zM632 40.85a1.1 1.1 0 0 1 0-1.49 1.05 1.05 0 1 1 1.49 1.49 1.1 1.1 0 0 1-1.49 0zm-.05 12.75V43.33h1.6V53.6zM638.13 43.33v1.8a2.84 2.84 0 0 1 2.8-1.9 2.91 2.91 0 0 1 .57 0v1.58a2.64 2.64 0 0 0-.87-.14 2.14 2.14 0 0 0-1.79 1 3.87 3.87 0 0 0-.71 2.29v5.64h-1.6V43.33zM648.75 43.67v1.52a5 5 0 0 0-2.55-.56 2 2 0 0 0-1.29.37 1.18 1.18 0 0 0-.47 1 1.29 1.29 0 0 0 .14.64 1.53 1.53 0 0 0 .56.54c.27.17.48.29.6.35l.85.38a6.77 6.77 0 0 1 2 1.19 2.33 2.33 0 0 1 .73 1.81 2.6 2.6 0 0 1-.92 2.09 3.85 3.85 0 0 1-2.52.77 6.27 6.27 0 0 1-3-.63v-1.6a5.57 5.57 0 0 0 2.92.81 2.26 2.26 0 0 0 1.41-.37 1.15 1.15 0 0 0 .49-1 1.35 1.35 0 0 0-.54-1.14 8.44 8.44 0 0 0-1.79-.91 5.57 5.57 0 0 1-1.86-1.11 2.41 2.41 0 0 1-.69-1.81 2.44 2.44 0 0 1 1-2 3.73 3.73 0 0 1 2.4-.76 6.32 6.32 0 0 1 2.53.42zM653.72 44.63v6c0 1.09.51 1.64 1.54 1.64a2.25 2.25 0 0 0 1.4-.47v1.52a3.14 3.14 0 0 1-1.5.37q-3 0-3-3.11v-6h-1.64v-1.3h1.64v-2.5h1.6v2.55h2.84v1.3zM664 53.6V39.94h2.07l3.43 5.76 3.5 5.92c-.05-1.31-.08-3.28-.08-5.9v-5.78h1.64V53.6h-2.06l-3.5-5.71a351.823 351.823 0 0 1-3.14-5.35l-.35-.63c.07 1.41.11 3.38.11 5.94v5.75zM677.8 45.48v-1.6a5.68 5.68 0 0 1 3-.71q3.87 0 3.87 3.93v6.5h-1.58v-1.21a3.08 3.08 0 0 1-2.88 1.32 3.2 3.2 0 0 1-2.32-.86 2.83 2.83 0 0 1-.88-2.14 2.67 2.67 0 0 1 1.12-2.3 5.09 5.09 0 0 1 3.07-.83h1.87v-.52a2.75 2.75 0 0 0-.55-1.84 2.37 2.37 0 0 0-1.84-.61 5 5 0 0 0-2.88.87zm5.31 3.38h-1.79a3.1 3.1 0 0 0-1.94.51 1.54 1.54 0 0 0-.65 1.28 1.62 1.62 0 0 0 .51 1.24 2.06 2.06 0 0 0 1.48.48 2.44 2.44 0 0 0 1.74-.62 2.09 2.09 0 0 0 .65-1.57zM689.13 43.33V45a3 3 0 0 1 2.89-1.8 2.79 2.79 0 0 1 3 2 3.48 3.48 0 0 1 1.25-1.49 3.25 3.25 0 0 1 1.79-.51 3.07 3.07 0 0 1 2.42.91 3.55 3.55 0 0 1 .81 2.45v7.04h-1.6V47c0-1.56-.66-2.33-2-2.33a2.25 2.25 0 0 0-1.74.88 3.61 3.61 0 0 0-.77 2.48v5.57h-1.6V47c0-1.56-.66-2.33-2-2.33a2.25 2.25 0 0 0-1.74.88 3.61 3.61 0 0 0-.77 2.48v5.57h-1.58V43.33zM711.62 51.58v1.5a6.18 6.18 0 0 1-2.92.63 4.91 4.91 0 0 1-5.18-5.21 5.56 5.56 0 0 1 1.27-3.87 4.21 4.21 0 0 1 3.29-1.42 4 4 0 0 1 3.06 1.23 5.05 5.05 0 0 1 1.13 3.56 6.47 6.47 0 0 1-.1 1.2h-7a3.41 3.41 0 0 0 1.15 2.33 3.87 3.87 0 0 0 2.56.81 4.81 4.81 0 0 0 2.74-.76zm-1-3.77v-.41a2.89 2.89 0 0 0-.69-2 2.42 2.42 0 0 0-1.9-.76 2.63 2.63 0 0 0-2 .83 3.73 3.73 0 0 0-1 2.37z" />
            <rect
              className="prefix__cls-4"
              x={790.13}
              y={60.76}
              width={156.56}
              height={41.29}
              rx={7.04}
            />
            <path d="M793.34 52.13h5.81v1.47h-7.46V39.94h1.65zM801.5 45.48v-1.6a5.7 5.7 0 0 1 3-.71q3.87 0 3.87 3.93v6.5h-1.58v-1.21a3.05 3.05 0 0 1-2.79 1.32 3.18 3.18 0 0 1-2.32-.86 2.84 2.84 0 0 1-.89-2.14 2.67 2.67 0 0 1 1.13-2.3 5.09 5.09 0 0 1 3.07-.83h1.86v-.52a2.75 2.75 0 0 0-.54-1.84 2.38 2.38 0 0 0-1.85-.61 5.07 5.07 0 0 0-2.96.87zm5.31 3.38H805a3.15 3.15 0 0 0-1.95.51 1.55 1.55 0 0 0-.64 1.28 1.61 1.61 0 0 0 .5 1.24 2.08 2.08 0 0 0 1.48.48 2.46 2.46 0 0 0 1.75-.62 2.08 2.08 0 0 0 .64-1.57zM816.85 43.67v1.52a5 5 0 0 0-2.56-.56A2 2 0 0 0 813 45a1.17 1.17 0 0 0-.48 1 1.41 1.41 0 0 0 .14.64 1.53 1.53 0 0 0 .56.54c.28.17.48.29.61.35l.84.38a6.77 6.77 0 0 1 2 1.19 2.33 2.33 0 0 1 .73 1.81 2.57 2.57 0 0 1-.92 2.09 3.81 3.81 0 0 1-2.52.77 6.3 6.3 0 0 1-3-.63v-1.6a5.59 5.59 0 0 0 2.92.81 2.31 2.31 0 0 0 1.42-.37 1.17 1.17 0 0 0 .48-1 1.37 1.37 0 0 0-.53-1.14 8.57 8.57 0 0 0-1.8-.91 5.42 5.42 0 0 1-1.85-1.11 2.38 2.38 0 0 1-.7-1.81 2.44 2.44 0 0 1 1-2 3.73 3.73 0 0 1 2.4-.76 6.4 6.4 0 0 1 2.55.42zM821.81 44.63v6c0 1.09.52 1.64 1.54 1.64a2.23 2.23 0 0 0 1.4-.47v1.52a3.14 3.14 0 0 1-1.5.37q-3 0-3-3.11v-6h-1.64v-1.3h1.64v-2.5h1.6v2.55h2.84v1.3zM832.11 53.6V39.94h2.06l3.43 5.76 3.46 5.92c0-1.31-.08-3.28-.08-5.9v-5.78h1.65V53.6h-2.07l-3.43-5.71a351.823 351.823 0 0 1-3.14-5.35l-.34-.63c.06 1.41.1 3.38.1 5.94v5.75zM845.89 45.48v-1.6a5.68 5.68 0 0 1 3-.71q3.87 0 3.87 3.93v6.5h-1.58v-1.21a3.08 3.08 0 0 1-2.88 1.32 3.2 3.2 0 0 1-2.32-.86 2.83 2.83 0 0 1-.88-2.14 2.67 2.67 0 0 1 1.12-2.3 5.12 5.12 0 0 1 3.08-.83h1.86v-.52a2.7 2.7 0 0 0-.55-1.84 2.36 2.36 0 0 0-1.84-.61 5 5 0 0 0-2.88.87zm5.31 3.38h-1.78a3.11 3.11 0 0 0-1.95.51 1.56 1.56 0 0 0-.65 1.28 1.62 1.62 0 0 0 .51 1.24 2.08 2.08 0 0 0 1.48.48 2.42 2.42 0 0 0 1.74-.62 2.09 2.09 0 0 0 .65-1.57zM857.22 43.33V45a3 3 0 0 1 2.9-1.8 2.8 2.8 0 0 1 3 2 3.4 3.4 0 0 1 1.24-1.49 3.29 3.29 0 0 1 1.8-.51 3.06 3.06 0 0 1 2.41.91 3.55 3.55 0 0 1 .81 2.45v7.04h-1.6V47c0-1.56-.66-2.33-2-2.33a2.25 2.25 0 0 0-1.74.88 3.61 3.61 0 0 0-.74 2.45v5.6h-1.6V47c0-1.56-.66-2.33-2-2.33a2.25 2.25 0 0 0-1.74.88 3.61 3.61 0 0 0-.77 2.48v5.57h-1.58V43.33zM879.72 51.58v1.5a6.24 6.24 0 0 1-2.92.63 4.91 4.91 0 0 1-5.19-5.21 5.51 5.51 0 0 1 1.28-3.87 4.19 4.19 0 0 1 3.28-1.42 4 4 0 0 1 3.06 1.23 5 5 0 0 1 1.13 3.56 6.47 6.47 0 0 1-.1 1.2h-7a3.45 3.45 0 0 0 1.15 2.33 3.87 3.87 0 0 0 2.56.81 4.82 4.82 0 0 0 2.75-.76zm-1-3.77v-.41a2.89 2.89 0 0 0-.69-2 2.42 2.42 0 0 0-1.9-.76 2.63 2.63 0 0 0-2 .83 3.73 3.73 0 0 0-1 2.37z" />
          </g>
          <g id="prefix__phoneGhost" opacity={0.3} ref={phoneGhost}>
            <rect
              className="prefix__cls-1"
              x={124.49}
              y={1}
              width={106.42}
              height={72.83}
              rx={12.03}
            />
            <path
              className="prefix__cls-2"
              d="M189.65 64.09h-1a16.15 16.15 0 0 1-2.17-.31c-.78-.17-1.36-.3-1.74-.41l-1.94-.57c-.88-.27-1.43-.42-1.63-.48a32 32 0 0 1-6.42-2.52 51.72 51.72 0 0 1-9.69-6.84 51.68 51.68 0 0 1-8.06-8.71 32 32 0 0 1-3.36-6c-.09-.24-.33-.75-.71-1.59l-.83-1.85c-.16-.36-.37-.91-.63-1.66a17.47 17.47 0 0 1-.62-2.11 13.76 13.76 0 0 1-.26-2A14.64 14.64 0 0 1 152 22c1.27-2.7 2.57-4.36 4-5.07a14.64 14.64 0 0 1 2.5-1 12.35 12.35 0 0 1 2.68-.56 3.5 3.5 0 0 1 1.26.11c.86.26 1.63 1.11 2.82 3.11.23.34.62.94 1.1 1.71l1.32 2c.38.59.75 1.13 1.11 1.65l.62.77a11.3 11.3 0 0 1 .94 1.34 3.79 3.79 0 0 1 .5 1.59 4 4 0 0 1-1.19 2.81 19.18 19.18 0 0 1-2.14 2.18 18.05 18.05 0 0 0-1.82 1.78 3.42 3.42 0 0 0-.45.6.82.82 0 0 0 .06.16c.1.22.19.4.26.52s.23.35.45.66l.51.73a33.85 33.85 0 0 0 6.1 7.15 34 34 0 0 0 8 5.09s.27.13.73.38l.73.36a4.41 4.41 0 0 0 .55.18h.15a3.37 3.37 0 0 0 .54-.53 19.65 19.65 0 0 0 1.52-2 17.66 17.66 0 0 1 1.86-2.42 4.05 4.05 0 0 1 2.62-1.56 3.7 3.7 0 0 1 1.65.27 11.34 11.34 0 0 1 1.45.75l.85.51c.56.29 1.15.58 1.78.87s1.39.66 2.2 1 1.48.68 1.93.9c2.06.86 3 1.5 3.38 2.33a3.42 3.42 0 0 1 .29 1.23 12.34 12.34 0 0 1-.19 2.74 15.19 15.19 0 0 1-.62 2.62c-.51 1.49-2 3-4.46 4.61a14.67 14.67 0 0 1-6.87 2.39zm-28.21-45.7h-.08a9.44 9.44 0 0 0-2 .44 11.82 11.82 0 0 0-2 .76c-.46.23-1.38 1-2.63 3.66a11.8 11.8 0 0 0-1.15 5.65 11.15 11.15 0 0 0 .71 3.27c.24.66.43 1.16.56 1.48l.81 1.79.75 1.67a29.1 29.1 0 0 0 3 5.39 48.57 48.57 0 0 0 7.65 8.17 48.71 48.71 0 0 0 9.12 6.45A29.7 29.7 0 0 0 182 59.4c.18 0 .76.21 1.72.5l1.88.55c.35.1.86.22 1.55.36a13.17 13.17 0 0 0 1.76.26 13.7 13.7 0 0 0 1.57 0 11.8 11.8 0 0 0 5.45-1.92c2.46-1.59 3.09-2.61 3.25-3.07a13.08 13.08 0 0 0 .48-2.08 10.12 10.12 0 0 0 .16-2.06.28.28 0 0 1 0-.09 11 11 0 0 0-1.91-1L196 50l-2.25-1c-.67-.31-1.31-.63-1.91-.94l-.13-.07-.84-.5a7.67 7.67 0 0 0-1-.54 1.05 1.05 0 0 0-.3-.07 6.45 6.45 0 0 0-.64.6 14.52 14.52 0 0 0-1.55 2 23.09 23.09 0 0 1-1.76 2.37 3.91 3.91 0 0 1-2.62 1.52 3.72 3.72 0 0 1-1.29-.17 8.3 8.3 0 0 1-.86-.29c-.2-.08-.52-.24-1-.48s-.51-.27-.59-.3a37.24 37.24 0 0 1-8.68-5.56 36.89 36.89 0 0 1-6.58-7.83l-.4-.56c-.3-.42-.5-.72-.6-.89a7.63 7.63 0 0 1-.4-.81 3.49 3.49 0 0 1-.35-1.26 4 4 0 0 1 1.22-2.72 21.9 21.9 0 0 1 2.12-2.07 16.13 16.13 0 0 0 1.78-1.82 2.47 2.47 0 0 0 .51-.78s-.05-.1-.12-.21a6.55 6.55 0 0 0-.67-.95l-.61-.76-.1-.13c-.38-.55-.78-1.13-1.19-1.76s-.85-1.31-1.34-2.08-.84-1.31-1.11-1.71a10.94 10.94 0 0 0-1.3-1.84zM195 39.22a1.49 1.49 0 0 1-1.31-.76 36.21 36.21 0 0 0-18.29-15.82 1.5 1.5 0 1 1 1.08-2.8A39.19 39.19 0 0 1 196.29 37a1.49 1.49 0 0 1-1.3 2.23z"
            />
            <path
              className="prefix__cls-2"
              d="M187.41 41.46a1.48 1.48 0 0 1-1.26-.69 28.59 28.59 0 0 0-5.25-6 28.2 28.2 0 0 0-6.71-4.33 1.5 1.5 0 0 1 1.26-2.73 31.75 31.75 0 0 1 7.41 4.79 31.12 31.12 0 0 1 5.8 6.65 1.49 1.49 0 0 1-.44 2.07 1.43 1.43 0 0 1-.81.24zM202.25 37.09a1.51 1.51 0 0 1-1.34-.81 43.53 43.53 0 0 0-24.39-21.11 1.5 1.5 0 1 1 1-2.84 46.52 46.52 0 0 1 26.06 22.57 1.5 1.5 0 0 1-.65 2 1.52 1.52 0 0 1-.68.19z"
            />
          </g>
          <g id="prefix__phoneSolid" ref={phoneSolid}>
            <rect
              x={124.49}
              y={1}
              width={106.42}
              height={72.83}
              rx={12.03}
              fill="#ffffff"
              stroke="#95c93d"
              strokeMiterlimit={10}
              strokeWidth={2}
            />
            <path
              className="prefix__cls-2"
              d="M189.65 64.09h-1a16.15 16.15 0 0 1-2.17-.31c-.78-.17-1.36-.3-1.74-.41l-1.94-.57c-.88-.27-1.43-.42-1.63-.48a32 32 0 0 1-6.42-2.52 51.72 51.72 0 0 1-9.69-6.84 51.68 51.68 0 0 1-8.06-8.71 32 32 0 0 1-3.36-6c-.09-.24-.33-.75-.71-1.59l-.83-1.85c-.16-.36-.37-.91-.63-1.66a17.47 17.47 0 0 1-.62-2.11 13.76 13.76 0 0 1-.26-2A14.64 14.64 0 0 1 152 22c1.27-2.7 2.57-4.36 4-5.07a14.64 14.64 0 0 1 2.5-1 12.35 12.35 0 0 1 2.68-.56 3.5 3.5 0 0 1 1.26.11c.86.26 1.63 1.11 2.82 3.11.23.34.62.94 1.1 1.71l1.32 2c.38.59.75 1.13 1.11 1.65l.62.77a11.3 11.3 0 0 1 .94 1.34 3.79 3.79 0 0 1 .5 1.59 4 4 0 0 1-1.19 2.81 19.18 19.18 0 0 1-2.14 2.18 18.05 18.05 0 0 0-1.82 1.78 3.42 3.42 0 0 0-.45.6.82.82 0 0 0 .06.16c.1.22.19.4.26.52s.23.35.45.66l.51.73a33.85 33.85 0 0 0 6.1 7.15 34 34 0 0 0 8 5.09s.27.13.73.38l.73.36a4.41 4.41 0 0 0 .55.18h.15a3.37 3.37 0 0 0 .54-.53 19.65 19.65 0 0 0 1.52-2 17.66 17.66 0 0 1 1.86-2.42 4.05 4.05 0 0 1 2.62-1.56 3.7 3.7 0 0 1 1.65.27 11.34 11.34 0 0 1 1.45.75l.85.51c.56.29 1.15.58 1.78.87s1.39.66 2.2 1 1.48.68 1.93.9c2.06.86 3 1.5 3.38 2.33a3.42 3.42 0 0 1 .29 1.23 12.34 12.34 0 0 1-.19 2.74 15.19 15.19 0 0 1-.62 2.62c-.51 1.49-2 3-4.46 4.61a14.67 14.67 0 0 1-6.87 2.39zm-28.21-45.7h-.08a9.44 9.44 0 0 0-2 .44 11.82 11.82 0 0 0-2 .76c-.46.23-1.38 1-2.63 3.66a11.8 11.8 0 0 0-1.15 5.65 11.15 11.15 0 0 0 .71 3.27c.24.66.43 1.16.56 1.48l.81 1.79.75 1.67a29.1 29.1 0 0 0 3 5.39 48.57 48.57 0 0 0 7.65 8.17 48.71 48.71 0 0 0 9.12 6.45A29.7 29.7 0 0 0 182 59.4c.18 0 .76.21 1.72.5l1.88.55c.35.1.86.22 1.55.36a13.17 13.17 0 0 0 1.76.26 13.7 13.7 0 0 0 1.57 0 11.8 11.8 0 0 0 5.45-1.92c2.46-1.59 3.09-2.61 3.25-3.07a13.08 13.08 0 0 0 .48-2.08 10.12 10.12 0 0 0 .16-2.06.28.28 0 0 1 0-.09 11 11 0 0 0-1.91-1L196 50l-2.25-1c-.67-.31-1.31-.63-1.91-.94l-.13-.07-.84-.5a7.67 7.67 0 0 0-1-.54 1.05 1.05 0 0 0-.3-.07 6.45 6.45 0 0 0-.64.6 14.52 14.52 0 0 0-1.55 2 23.09 23.09 0 0 1-1.76 2.37 3.91 3.91 0 0 1-2.62 1.52 3.72 3.72 0 0 1-1.29-.17 8.3 8.3 0 0 1-.86-.29c-.2-.08-.52-.24-1-.48s-.51-.27-.59-.3a37.24 37.24 0 0 1-8.68-5.56 36.89 36.89 0 0 1-6.58-7.83l-.4-.56c-.3-.42-.5-.72-.6-.89a7.63 7.63 0 0 1-.4-.81 3.49 3.49 0 0 1-.35-1.26 4 4 0 0 1 1.22-2.72 21.9 21.9 0 0 1 2.12-2.07 16.13 16.13 0 0 0 1.78-1.82 2.47 2.47 0 0 0 .51-.78s-.05-.1-.12-.21a6.55 6.55 0 0 0-.67-.95l-.61-.76-.1-.13c-.38-.55-.78-1.13-1.19-1.76s-.85-1.31-1.34-2.08-.84-1.31-1.11-1.71a10.94 10.94 0 0 0-1.3-1.84zM195 39.22a1.49 1.49 0 0 1-1.31-.76 36.21 36.21 0 0 0-18.29-15.82 1.5 1.5 0 1 1 1.08-2.8A39.19 39.19 0 0 1 196.29 37a1.49 1.49 0 0 1-1.3 2.23z"
            />
            <path
              className="prefix__cls-2"
              d="M187.41 41.46a1.48 1.48 0 0 1-1.26-.69 28.59 28.59 0 0 0-5.25-6 28.2 28.2 0 0 0-6.71-4.33 1.5 1.5 0 0 1 1.26-2.73 31.75 31.75 0 0 1 7.41 4.79 31.12 31.12 0 0 1 5.8 6.65 1.49 1.49 0 0 1-.44 2.07 1.43 1.43 0 0 1-.81.24zM202.25 37.09a1.51 1.51 0 0 1-1.34-.81 43.53 43.53 0 0 0-24.39-21.11 1.5 1.5 0 1 1 1-2.84 46.52 46.52 0 0 1 26.06 22.57 1.5 1.5 0 0 1-.65 2 1.52 1.52 0 0 1-.68.19z"
            />
          </g>
          <path
            d="M440.05 117.24c1.17-3.79 5-17 5-21.88V78.44a4.09 4.09 0 1 0-8.17 0v7.21a.77.77 0 1 1-1.53 0V74.38a4.08 4.08 0 1 0-8.16 0v8a.77.77 0 1 1-1.54 0V71.15a4.08 4.08 0 1 0-8.16 0v8a.77.77 0 1 1-1.54 0V56a4.08 4.08 0 1 0-8.16 0v35.88a.77.77 0 0 1-1.35.5l-9.56-10.93-.11-.12A4.13 4.13 0 0 0 394 80.2h0a4 4 0 0 0-2.86 1.18c-.94.94-1.68 2.74.15 6 2.79 4.9 5.84 9.55 8.55 13.67 2 3.06 3.9 6 5.32 8.39.9 1.56 2.79 5.66 3.83 7.83z"
            stroke="#3d4543"
            fill="#fff"
            strokeMiterlimit={10}
            strokeWidth={2}
            id="prefix__pointer"
            ref={pointer}
          />
        </g>
      </g>
    </SVGWrapper>
  );
};

const SVGWrapper = styled("svg")({

});
