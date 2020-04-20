import React, { useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import Collapsible from "react-collapsible";
import YamlData from "../../pages/careers/openPositions.yaml";

import styles from "./JobInfo.module.scss";

export default function JobInfo(props) {
  const [open, setOpen] = useState(false);
  return (
    <DetailsContainer>
      <Collapsible
        classParentString={styles.collapsible}
        contentInnerClassName={styles.collapsibleContent}
        easing="ease"
        onOpening={() => setOpen(true)}
        onClosing={() => setOpen(false)}
        transitionTime={300}
        triggerTagName="div"
        trigger={<Trigger name="Test 1" open={open} />}
      >
        <p>Testing</p>
      </Collapsible>
    </DetailsContainer>
  );
}

const CollapsibleTrigger = styled.div({
  alignItems: "center",
  color: "#666666",
  cursor: "pointer",
  display: "flex",
  fontSize: "1.5rem",
  height: "100%",
  justifyContent: "space-between",
  padding: "1rem",
  width: "100%",
});

const CSSTriangle = styled.div({
  border: "10px solid transparent",
  borderTopColor: "#ADADAD",
  top: 0,
  height: 0,
  left: 0,
  position: "absolute",
  width: 0,
});

function Trigger(props) {
  return (
    <CollapsibleTrigger>
      <span>{props.name}</span>
      <div
        className={`${styles.triangleContainer} ${
          props.open ? styles.openIcon : ""
        }`}
      >
        <CSSTriangle />
      </div>
    </CollapsibleTrigger>
  );
}

const DetailsContainer = styled.div(
  {
    flex: 1,
    flexDirection: "column",
    margin: "2rem 2rem 0 0",
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      boxShadow: "unset",
      margin: "0 0 2rem 0",
      padding: 0,
    },
  })
);

const mappedPositions = YamlData.openPositions.map((position) => (
  <option key={position.value} value={position.value}>
    {position.name}
  </option>
));

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const SuccessMessage = styled.div(
  (props) => ({
    alignItems: "center",
    animation: props.show ? `${fadeIn} 200ms` : "unset",
    animationFillMode: "forwards",
    background: "#fff",
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    fontSize: 36,
    height: "100%",
    justifyContent: "center",
    left: 0,
    opacity: props.show ? 1 : 0,
    padding: 50,
    position: "absolute",
    textAlign: "center",
    top: 0,
    width: "100%",
    zIndex: props.show ? 1 : -1,
  }),
  ({ theme }) => ({
    color: theme.primary.color,
  })
);
